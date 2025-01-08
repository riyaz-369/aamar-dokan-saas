/* eslint-disable @typescript-eslint/ban-ts-comment */
import PageTitle from "@/components/PageTitle";
import React from "react";
import { columns, OrdersTypes } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";

async function getData(): Promise<OrdersTypes[]> {
  const orders = await prisma.orders.findMany({
    select: {
      id: true,
      aamardokanId: true,
      orderId: true,
      service: {
        select: {
          id: true,
          title: true,
          description: true,
          photo: true,
        },
      },
      status: true,
      paymentStatus: true,
      amount: true,
      paymentTerms: true,
      createdAt: true,
    },
  });

  //@ts-ignore
  return orders;
}

const OrdersPage = async () => {
  const orders = await getData();

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Orders" />
      </div>
      <DataTable columns={columns} data={orders || []} />
    </div>
  );
};

export default OrdersPage;
