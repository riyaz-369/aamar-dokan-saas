import PageTitle from "@/components/PageTitle";
import React from "react";
import { BillingTypes, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function getData(): Promise<BillingTypes[]> {
  const session = await getServerSession(authOptions);
  const aamardokanId: string | undefined = session?.user?.aamardokanId;

  if (!aamardokanId) {
    return [];
  }

  const billings = await prisma.transaction.findMany({
    where: {
      aamardokanId,
    },
    select: {
      id: true,
      aamardokanId: true,
      amount: true,
      order: {
        select: {
          paymentStatus: true,
          status: true,
          paymentTerms: true,
          orderId: true,
          service: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
      paymentId: true,
      method: true,
      currency: true,
      transactionId: true,
      merchantInvoiceNumber: true,
      payerAccount: true,
      customerMsisdn: true,
      transactionStatus: true,
      paymentExecuteTime: true,
      statusMessage: true,
    },
  });

  return billings;
}

const BillingPage = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Billing" />
      </div>
      <DataTable columns={columns} data={data || []} />
    </div>
  );
};

export default BillingPage;
