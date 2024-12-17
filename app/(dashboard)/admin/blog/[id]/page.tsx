import PageTitle from "@/components/PageTitle";
import React from "react";
import prisma from "@/prisma";
import BlogPostForm from "../_components/BlogPostForm";

const UpdateUserPage = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.blog.findFirst({
    where: {
      id: params.id,
    },
  });
  // console.log(data);

  return (
    <div className="">
      <PageTitle title="Update Blog Post" />
      <BlogPostForm entry={data} />
    </div>
  );
};

export default UpdateUserPage;
