import PageTitle from "@/components/PageTitle";
import React from "react";
import BlogPostForm from "../_components/BlogPostForm";

const BlogPage = async () => {
  return (
    <div className="">
      <PageTitle title="New Blog Post" />
      <BlogPostForm entry={{}} />
    </div>
  );
};

export default BlogPage;
