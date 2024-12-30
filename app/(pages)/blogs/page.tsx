import React from "react";
import BlogCard from "./_components/BlogCard";
import prisma from "@/prisma";

const BlogsPage = async () => {
  const blogs = await prisma.blog.findMany({
    where: {
      status: "Active",
    },
  });

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 md:my-24 my-4">
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <p>No blogs found</p>
      )}
    </div>
  );
};

export default BlogsPage;
