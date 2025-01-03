import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";

const ServicesPage = async () => {
  const data = await prisma.services.findMany(
    {
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        meta: true,
        category: true,
        photo: true,
        status: true,
        packages: true,
      }
    }
  );

  // console.log(data)

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Services" />
        <Link href="/admin/services/create">
          <Button>Create New Service</Button>
        </Link>
      </div>
      {/* Blog posts list */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ServicesPage;
