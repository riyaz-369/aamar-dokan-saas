import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { columns, TBlogPost } from "./_components/columns";
import { DataTable } from "./_components/data-table";

async function getData(): Promise<TBlogPost[]> {
  // Fetch data from your API here.
  return [
    {
      id: "009",
      photo: "http://example.com",
      title: "Post tile",
      publishDate: new Date().toLocaleDateString(),
      category: "Tech",
    },
  ];
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
