import PageTitle from "@/components/PageTitle";
import React from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";

const CustomersPage = async () => {
  const data = await prisma.client.findMany({});
  console.log(data);
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Customers" />
        {/* <Link href="/admin/customers/create">
          <Button>Create New customer</Button>
        </Link> */}
      </div>
      {/* Blog posts list */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CustomersPage;
