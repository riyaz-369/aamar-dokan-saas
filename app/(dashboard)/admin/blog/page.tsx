import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import prisma from "@/prisma";

const BlogPage = async () => {
  const data = await prisma.blog.findMany({
    // where: {
    //   status: "Active",
    // },
  });

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Blogs" />
        <Link href="/admin/blog/create">
          <Button>Create New Blog Post</Button>
        </Link>
      </div>
      {/* Blog posts list */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default BlogPage;
