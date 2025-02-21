import PageTitle from "@/components/PageTitle";
import React from "react";
import { columns, MyOrdersTypes } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function getData(): Promise<MyOrdersTypes[]> {
  const session = await getServerSession(authOptions);
  const aamardokanId: string | undefined = session?.user?.aamardokanId;

  if (!aamardokanId) {
    return [];
  }

  const myOrders = await prisma.orders.findMany({
    where: {
      aamardokanId,
    },
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

  return myOrders;
}

const MyOrdersPage = async () => {
  const myOrders = await getData();

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="My Orders" />
      </div>
      <DataTable columns={columns} data={myOrders || []} />
    </div>
  );
};

export default MyOrdersPage;
