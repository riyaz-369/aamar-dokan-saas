/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { GetToken } from "@/app/(dashboard)/client/(order)/payment/payment-actions/_action";
// import { getClientServicesList } from "@/app/(pages)/auth/_action";
// import { CreateTransactionIntoDB, SaveOrderIntoDB, updateClientServiceList } from "@/app/(dashboard)/client/(order)/payment/_action";

async function executePayment(paymentID: string, idToken: string) {
  const response = await fetch(
    `https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        authorization: idToken,
        "x-app-key": "4f6o0cjiki2rfm34kfdadl1eqq",
      },
      body: JSON.stringify({
        paymentID: paymentID,
      }),
    }
  );

  // console.log("execute payment response:", response);
  // if (!response.ok) {
  //   throw new Error(`Failed to execute payment: ${response.statusText}`);
  // }

  const responseData = await response.json();
  return responseData;
}

// async function savePaymentInformation(executionResponse: unknown) {
//   const session = await getServerSession(authOptions);
//   const {} = session?.user
//   console.log(executionResponse);
//   const client = await getClientServicesList(session?.user?.phone);
//   const { services } = client;
//   try {
//     // TO DO:: if payment successful then --> save the order information
//     const order = await SaveOrderIntoDB(orderData);
//     if (order) {
//       const transactionInfo = {
//         ...orderData,
//         orderId: order.id,
//         aamardokanId: order.aamardokanId,
//         // paymentId: "comeAfterPay",
//         method: "bkash",
//       };
//       const transaction = await CreateTransactionIntoDB(transactionInfo);
//       // console.log("transaction", transaction);

//       const clientServices = [
//         ...services,
//         {
//           serviceId: orderData.serviceId,
//           packageId: orderData.packageId,
//           amount: orderData.amount,
//           nextPayment: new Date(), // TODO:: make a date fns function for the next payment
//         },
//       ];
//       if (transaction) {
//      await updateClientServiceList(
//           clientServices,
//           id
//         );
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    // console.log("session from api route", session);
    //@ts-ignore
    const aamardokanId = session?.user?.aamardokanId;

    const { searchParams } = new URL(req.url);
    const paymentID = searchParams.get("paymentID");
    const status = searchParams.get("status");

    //@ts-ignore
    const { idToken } = await GetToken(aamardokanId);

    if (status === "cancel") {
      // console.log(`Payment not successful. Status: ${status}`);
      return NextResponse.redirect("http://localhost:3000/client/my-services");
    }

    if (!paymentID || !status) {
      return NextResponse.json({ error: "Missing paymentID or status" });
    }

    if (status !== "success") {
      // console.log(`Payment not successful. Status: ${status}`);
      return NextResponse.json({ message: "Payment not successful", status });
    }

    // console.log("idtoken from api callback:", idToken);

    // Execute the payment
    const executionResponse = await executePayment(paymentID, idToken);
    // console.log("Execution Response:", executionResponse);

    if (executionResponse.statusCode === "0000") {
      // savePaymentInformation(executionResponse);
      return NextResponse.redirect(
        "http://localhost:3000/client/payment/success"
      );
    } else {
      return NextResponse.redirect(
        "http://localhost:3000/client/payment/failed"
      );
    }
  } catch (error) {
    console.error("Error in payment callback:", error);
    return NextResponse.json({
      error: "Failed to process payment callback",
      details: error,
    });
  }
}
