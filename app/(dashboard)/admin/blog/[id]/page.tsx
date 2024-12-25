import PageTitle from "@/components/PageTitle";
import React from "react";
import prisma from "@/prisma";
import BlogPostForm from "../_components/BlogPostForm";

const UpdateBlogPage = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.blog.findFirst({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      tags: true,
      meta: true,
      content: true,
      publishDate: true,
      photo: true,
      privacyPolicy: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
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

export default UpdateBlogPage;
