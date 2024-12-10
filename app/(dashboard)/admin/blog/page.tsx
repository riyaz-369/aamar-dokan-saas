import PageTitle from "@/components/PageTitle";
import React from "react";
import BlogPostForm from "./_components/BlogPostForm";

const BlogPage = () => {
  return (
    <div className="">
      <PageTitle title="Create Blog Post" />
      <BlogPostForm />
    </div>
  );
};

export default BlogPage;
