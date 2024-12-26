import PageTitle from "@/components/PageTitle";
import React from "react";
import { columns } from "./_components/columns";
import type { TBlogPost } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function getData(): Promise<TBlogPost[]> {
  const user = await getServerSession(authOptions);
  if (!user || !user.aamarDokanId) {
    return null;
  }
  const data = await prisma.transaction.findMany({
    where: { aamrDokanId: user.aamarDokanId },
  });

  return data;
}

const BillingPage = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Billing" />
      </div>
      {/* Blog posts list */}
      <DataTable columns={columns} data={data || []} />
    </div>
  );
};

export default BillingPage;
