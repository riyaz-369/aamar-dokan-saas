import { AspectRatio } from "@/components/ui/aspect-ratio";
import prisma from "@/prisma";
import Image from "next/image";
import React from "react";

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  console.log(slug);

  const blog = await prisma.blog.findFirst({ where: { slug: slug } });
  console.log(blog);
  return (
    <main className="w-full h-screen mx-auto flex-1 flex-col flex justify-start items-center py-10">
      <div className="flex w-full px-28 gap-10 items">
        <div className="w-1/2">
          <AspectRatio ratio={16 / 9} className="rounded-md">
            <Image
              src={blog?.photo}
              alt="Image"
              className="rounded-md object-cover"
              height={600}
              width={800}
            />
          </AspectRatio>
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl text-primary font-bold pb-4">
            {blog?.title || ""}
          </h1>
          <div className="space-y-3">
            <p className="text-md ">Published: </p>
            <p className="text-md ">Category: {blog?.categoryId}</p>
            <p className="text-md ">Tags: {blog?.tags}</p>
            <p className="text-md ">{blog?.meta?.description}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full px-28 gap-4 pt-6">{blog?.content}</div>
    </main>
  );
};

export default SingleBlog;
