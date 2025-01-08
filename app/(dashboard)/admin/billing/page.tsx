/* eslint-disable @typescript-eslint/ban-ts-comment */
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BillingTypes, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";

async function getData(): Promise<BillingTypes[]> {
  const billings = await prisma.transaction.findMany({
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

  //@ts-ignore
  return billings;
}

const BillingPage = async () => {
  const data = await getData();

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Billing" />
        <Link href="/admin/billing/create">
          <Button>Create New Billing</Button>
        </Link>
      </div>
      {/* Blog posts list */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default BillingPage;
