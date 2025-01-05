import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";

const PackagesPage = async () => {
  const data = await prisma.package.findMany({
    // where: {
      // status: "Active",
    // },
    select: {
      id: true,
      title: true,
      subtitle: true,
      status: true,
      service: true,
      createdAt: true,
      updatedAt: true,
      price: true,
    },
  });

  // console.log("data: ", data);

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Packages" />
        <Link href="/admin/packages/create">
          <Button>Create New Packages</Button>
        </Link>
      </div>
      {/* Blog posts list */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PackagesPage;
