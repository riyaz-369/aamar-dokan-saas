/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/prisma";
import { OrderStatus, PaymentStatus, paymentTermsStatus } from "@prisma/client";

const generateOrderId = async () => {
  const MAX_RETRIES = 3;

  for (let i = 0; i < MAX_RETRIES; i++) {
    const newOrderId =
      "AD" + Math.floor(100000 + Math.random() * 900000).toString();
    return newOrderId;
  }
};

// const generateTransactionId = async () => {
//   const MAX_RETRIES = 6;

//   for (let i = 0; i < MAX_RETRIES; i++) {
//     const newTrxId =
//       "ADTRX" + Math.floor(100000 + Math.random() * 900000).toString();
//     return newTrxId;
//   }
// };

type OrderDataProsType = {
  aamardokanId: string;
  clientId: string;
  serviceId: string;
  packageId: string;
  amount: number;
  paymentTerms: paymentTermsStatus;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
};

export const SaveOrderIntoDB = async (data: OrderDataProsType) => {
  const orderId = await generateOrderId();
  // console.log("data from action:", data, "orderId:", orderId);
  const {
    aamardokanId,
    clientId,
    serviceId,
    packageId,
    amount,
    paymentTerms,
    status,
    paymentStatus,
  } = data;

  try {
    if (orderId) {
      const order = await prisma.orders.create({
        data: {
          aamardokanId,
          orderId,
          clientId,
          serviceId,
          packageId,
          amount,
          paymentTerms,
          status,
          paymentStatus,
        },
      });
      return order;
    } else {
      console.error("Failed to generate order ID");
      return null;
    }
  } catch (error) {
    console.error("Error creating order:", error);
    return null;
  }
};

type TransactionDataProsType = {
  clientId: string;
  orderId: string;
  aamardokanId: string;
  paymentId: string;
  method: string;
  amount: number;
  currency: string;
  transactionId: string;
  merchantInvoiceNumber: string;
  payerAccount: string;
  customerMsisdn: string;
  transactionStatus: "Completed" | "Failed" | "Canceled";
  statusMessage: string;
  paymentExecuteTime: Date;
};

export const CreateTransactionIntoDB = async (
  data: TransactionDataProsType
) => {
  try {
    const transaction = await prisma.transaction.create({
      data: {
        clientId: data.clientId,
        orderId: data.orderId,
        aamardokanId: data.aamardokanId,
        paymentId: data.paymentId,
        method: data.method,
        amount: data.amount,
        currency: data.currency,
        transactionId: data.transactionId,
        merchantInvoiceNumber: data.merchantInvoiceNumber,
        payerAccount: data.payerAccount,
        customerMsisdn: data.customerMsisdn,
        transactionStatus: data.transactionStatus,
        statusMessage: data.statusMessage,
        paymentExecuteTime: data.paymentExecuteTime,
      },
    });
    return transaction;
  } catch (error) {
    console.error("Error to create transaction", error);
    return null;
  }
};

export const updateClientServiceListIntoBD = async (
  data: any[],
  id: string
) => {
  // console.log("form update client action:", data, id);
  if (id) {
    try {
      const update = await prisma.client.update({
        where: { id: id },
        data: {
          services: data,
        },
      });
      return update;
    } catch (error) {
      console.error("[UPDATE CLIENT]", error);
    }
  }
};
