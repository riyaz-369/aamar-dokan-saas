/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { GetToken } from "@/app/(dashboard)/client/(order)/payment/payment-actions/_action";
import {
  CreateTransactionIntoDB,
  updateClientServiceListIntoBD,
  updateOrder,
} from "@/app/(dashboard)/client/(order)/payment/_action";
import { getClientServicesList } from "@/app/(pages)/auth/_action";
import prisma from "@/prisma";

async function executePayment(paymentID: string, idToken: string) {
  const response = await fetch(
    process.env.BKASH_EXECUTE_PAYMENT_API as string,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        authorization: idToken,
        "x-app-key": process.env.BKASH_APP_KEY as string,
      },
      body: JSON.stringify({
        paymentID: paymentID,
      }),
    }
  );

  const responseData = await response.json();
  return responseData;
}

// callback GET function
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    //@ts-ignore
    const aamardokanId = session?.user?.aamardokanId;

    const { searchParams } = new URL(req.url);
    const paymentID = searchParams.get("paymentID");
    const status = searchParams.get("status");

    //@ts-ignore
    const { idToken } = await GetToken(aamardokanId);

    if (status === "failure") {
      return NextResponse.redirect(
        `${process.env.BASE_URL}/client/payment/failed`
      );
    } else if (status === "cancel") {
      return NextResponse.redirect(`${process.env.BASE_URL}/client/cart`);
    } else if (!paymentID || !status) {
      return NextResponse.json({ error: "Missing paymentID or status" });
    } else if (status !== "success") {
      return NextResponse.json({ message: "Payment not successful", status });
    }

    // Execute the payment ----------->
    const executionResponse = await executePayment(paymentID, idToken);
    if (executionResponse.statusCode === "0000") {
      const orderData = await prisma.orders.findUnique({
        where: {
          orderId: executionResponse?.merchantInvoiceNumber,
        },
      });
      const orderInfo = {
        paymentStatus: "Paid",
        status: "Complete",
      };

      const updateOrderInfo = await updateOrder(
        orderInfo,
        orderData?.orderId as string
      );

      if (updateOrderInfo) {
        const transactionData = {
          orderId: updateOrderInfo?.id,
          amount: updateOrderInfo?.amount,
          clientId: updateOrderInfo?.clientId,
          aamardokanId: updateOrderInfo?.aamardokanId,
          method: "bkash",
          currency: executionResponse.currency,
          transactionId: executionResponse.trxID,
          merchantInvoiceNumber: executionResponse.merchantInvoiceNumber,
          payerAccount: executionResponse.payerAccount,
          customerMsisdn: executionResponse.customerMsisdn,
          transactionStatus: executionResponse.transactionStatus,
          statusMessage: executionResponse.statusMessage,
          paymentExecuteTime: executionResponse.paymentExecuteTime,
          paymentId: executionResponse.paymentID,
        };

        const transaction = await CreateTransactionIntoDB(transactionData);
        if (transaction) {
          // @ts-ignore
          const client = await getClientServicesList(aamardokanId);
          const { services, id } = client;

          const marched = services.find(
            (service: any) => service.serviceId === orderData?.serviceId
          );
          const reset = services.filter(
            (service: any) => service.serviceId !== orderData?.serviceId
          );

          let clientServices = services;
          if (!marched) {
            clientServices = [
              ...services,
              {
                serviceId: orderData?.serviceId,
                packageId: orderData?.packageId,
                amount: orderData?.amount,
                nextPayment: new Date(),
                status: "active",
              },
            ];
          } else {
            clientServices = [
              ...reset,
              {
                ...marched,
                status: "active",
              },
            ];
          }
          //@ts-ignore
          const updateService = await updateClientServiceListIntoBD(
            clientServices,
            id
          );
          if (updateService) {
            return NextResponse.redirect(
              `${process.env.BASE_URL}/client/payment/success`
            );
          }
        }
      }
    }
  } catch (error) {
    console.error("Error in payment callback:", error);
    return NextResponse.json({
      error: "Failed to process payment callback",
      details: error,
    });
  }
}
