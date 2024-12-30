import { AspectRatio } from "@/components/ui/aspect-ratio";
import prisma from "@/prisma";
import Image from "next/image";
import React from "react";

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  // console.log(slug);

  const blog = await prisma.blog.findFirst({
    where: { slug: slug, status: "Active" },
    select: {
      id: true,
      title: true,
      slug: true,
      photo: true,
      content: true,
      tags: true,
      meta: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  console.log(blog);
  return (
    <main className="w-full flex-1 flex-col flex justify-start items-center py-4 md:py-10">
      <div className="flex md:flex-row flex-col w-full md:px-28 px-4  md:gap-10 items">
        <div className="w-full md:w-1/2  mb-4 md:mb-0">
          <AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden">
            <Image
              src={blog?.photo}
              alt="Image"
              className="rounded-md object-cover"
              height={600}
              width={800}
            />
          </AspectRatio>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="md:text-4xl text-2xl text-primary font-bold pb-4">
            {blog?.title || ""}
          </h1>
          <div className="space-y-2 md:space-y-3">
            <p className="text-md ">Category: {blog?.category.name}</p>
            <p className="text-md ">Tags: {blog?.tags}</p>
            <p className="text-md ">{blog?.meta?.description}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:px-28 px-4 pt-6 mb-8">{blog?.content}</div>
    </main>
  );
};

export default SingleBlog;
