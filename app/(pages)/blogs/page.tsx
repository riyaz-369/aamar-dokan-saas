import React from "react";
import BlogCard from "./_components/BlogCard";
import prisma from "@/prisma";

const BlogsPage = async () => {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 my-24">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPage;
