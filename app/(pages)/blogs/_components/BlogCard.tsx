"use client";

import { TBlogPost } from "@/app/(dashboard)/admin/blog/_actions";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const BlogCard = ({ blog }: { blog: TBlogPost }) => {
  const { title, slug, photo, content, publishDate } = blog;

  return (
    <Card className="p-0 pb-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <Link href={`/blogs/${slug}`}>
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={photo}
              alt={title}
              className="w-full h-52 object-cover rounded-t-lg "
              height={200}
              width={400}
            />
          </AspectRatio>
          <CardTitle className="text-md font-semibold  pt-10 px-4">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <CardDescription className="">
            {/* <p>{new Date(publishDate).toLocaleDateString()}</p> */}
            <p className="text-sm">
              {content.length > 80 ? `${content.slice(0, 80)}...` : content}
            </p>
          </CardDescription>
          {/* <span className="font-semibold">Category:</span> {"Technology"} */}
        </CardContent>
      </Link>
      {/* <CardFooter className="p-4 border-t flex justify-end items-center">
        <Button>Reed More</Button>
      </CardFooter> */}
    </Card>
  );
};

export default BlogCard;
