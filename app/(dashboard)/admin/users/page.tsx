import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";

const UsersPage = async () => {
  const data = await prisma.user.findMany({});

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Users" />
        <Link href="/admin/users/create">
          <Button>Create New User</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
