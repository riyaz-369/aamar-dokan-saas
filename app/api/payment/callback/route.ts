/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { GetToken } from "@/app/(dashboard)/client/(order)/payment/payment-actions/_action";
import {
  CreateTransactionIntoDB,
  SaveOrderIntoDB,
  updateClientServiceListIntoBD,
} from "@/app/(dashboard)/client/(order)/payment/_action";
// import { resetCart } from "@/app/_redux-store/slice/orderSlice";
import store, { RootState } from "@/app/_redux-store/store";
import { getClientServicesList } from "@/app/(pages)/auth/_action";

const getOrderSliceData = () => {
  const state: RootState = store.getState();
  const orderData = state.orderSlice;
  return orderData;
};

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

  const responseData = await response.json();
  return responseData;
}

async function createOrder(executionResponse: any) {
  const state: RootState = store.getState();
  const orderData = state.orderSlice;

  // console.log("order slice data from create order func:", orderData);

  const order = await SaveOrderIntoDB(orderData);
  // console.log("order from route:", order);
  if (order) {
    await createTransaction(executionResponse, order.id);
  }
}

async function createTransaction(executionResponse: any, orderId: string) {
  const orderData = getOrderSliceData();

  const transactionInfo = {
    ...orderData,
    orderId: orderId,
    paymentId: executionResponse.paymentID,
    method: "bkash",
    amount: executionResponse.amount(parseInt),
    currency: executionResponse.currency,
    transactionId: executionResponse.trxID,
    merchantInvoiceNumber: executionResponse.merchantInvoiceNumber,
    payerAccount: executionResponse.payerAccount,
    customerMsisdn: executionResponse.customerMsisdn,
    transactionStatus: executionResponse.transactionStatus,
    statusMessage: executionResponse.statusMessage,
    paymentExecuteTime: executionResponse.paymentExecuteTime,
  };

  const transaction = await CreateTransactionIntoDB(transactionInfo);
  // console.log("transection info:", transaction);

  if (transaction) {
    // store.dispatch(resetCart());
    // return transaction;
  }
}

async function updateClientServiceInformation(executionResponse: any) {
  const session = await getServerSession(authOptions);
  const orderData = getOrderSliceData();

  // console.log(
  //   "order slice data from updateClientServiceInformation func:",
  //   orderData
  // );

  // @ts-ignore
  const client = await getClientServicesList(session?.user?.phone);
  // console.log("client from savePaymentInformation", client);
  const { services } = client;
  try {
    const marched = services.find(
      (service: any) => service.serviceId === orderData.serviceId
    );
    let clientServices = services;
    if (!marched) {
      clientServices = [
        ...services,
        {
          serviceId: orderData.serviceId,
          packageId: orderData.packageId,
          amount: orderData.amount,
          nextPayment: new Date(), // TODO:: make a date fns function for the next payment
        },
      ];
    }
    //@ts-ignore
    const id = session?.user?.id;
    await updateClientServiceListIntoBD(clientServices, id);
    await createOrder(executionResponse);
  } catch (error) {
    console.error(error);
  }
}

// callback GET function
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
      return NextResponse.json({ message: "Payment not successful", status });
    }

    // Execute the payment
    const executionResponse = await executePayment(paymentID, idToken);
    console.log("Execution Response:", executionResponse);

    if (executionResponse.statusCode === "0000") {
      await updateClientServiceInformation(executionResponse);
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
