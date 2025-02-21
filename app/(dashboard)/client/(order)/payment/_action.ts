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

export const SaveOrderIntoDB = async (data: OrderDataProsType) => {
  const orderId = await generateOrderId();
  // console.log("data from action:", data);
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
          orderId: orderId,
          clientId,
          serviceId,
          packageId,
          amount,
          paymentTerms,
          status,
          paymentStatus,
        },
      });
      // console.log("order after create:", order);
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

export const updateOrder = async (data: any, orderId: string) => {
  const update = await prisma.orders.update({
    where: { orderId: orderId },
    data: {
      ...data,
    },
  });

  return update;
};

export const CreateTransactionIntoDB = async (
  data: TransactionDataProsType
) => {
  const {
    clientId,
    orderId,
    aamardokanId,
    paymentId,
    method,
    amount,
    currency,
    transactionId,
    merchantInvoiceNumber,
    payerAccount,
    customerMsisdn,
    transactionStatus,
    statusMessage,
    paymentExecuteTime,
  } = data;

  // console.log("data from create transaction:", data);
  try {
    const transaction = await prisma.transaction.create({
      data: {
        clientId: clientId,
        orderId: orderId,
        aamardokanId: aamardokanId,
        paymentId: paymentId,
        method: method,
        amount: amount,
        currency: currency,
        transactionId: transactionId,
        merchantInvoiceNumber: merchantInvoiceNumber,
        payerAccount: payerAccount,
        customerMsisdn: customerMsisdn,
        transactionStatus: transactionStatus,
        statusMessage: statusMessage,
        paymentExecuteTime: paymentExecuteTime,
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
