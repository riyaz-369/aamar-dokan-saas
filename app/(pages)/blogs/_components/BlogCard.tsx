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

const BlogCard = ({ blog }: { blog: TBlogPost }) => {
  const { title, photo, content, publishDate } = blog;

  return (
    <Card className="mx-auto shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <Link href={`/`}>
        <CardHeader className="p-4 space-y-4">
          <Image
            src={photo}
            alt={title}
            className="w-full h-64 object-cover mt-4 rounded-lg"
            height={300}
            width={400}
          />
          <CardTitle className="text-xl font-bold mt-4">{title}</CardTitle>
          <CardDescription className="">
            <p>{new Date(publishDate).toLocaleDateString()}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <span className="font-semibold">Category:</span> {"Technology"}
          <p className="text-sm">{content || "No content available."}</p>
        </CardContent>
      </Link>

      <CardFooter className="p-4 border-t flex justify-end items-center">
        <Button>Reed More</Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
