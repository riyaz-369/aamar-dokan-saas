import React from "react";
import BlogCard from "./_components/BlogCard";
import prisma from "@/prisma";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { FaRecycle } from "react-icons/fa";
// import { AlignJustify, Grid } from "lucide-react";

const BlogsPage = async () => {
  const blogs = await prisma.blog.findMany({
    where: {
      status: "Active",
    },
  });

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 md:my-24 my-4">
      {/* search bar */}
      {/* <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 bg-[#955E42] bg-opacity-5 p-4 rounded-3xl">
          <div>
            <select name="category" className="border  py-1 px-4 rounded-full">
              <option value="">All</option>
              <option value="Health Care">Health Care</option>
            </select>
          </div>
          <form>
            <div className="flex p-1 overflow-hidden rounded-full">
              <input
                className="py-1 px-4 border border-r-0  rounded-l-full outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Post Title"
                aria-label="Enter Post Title"
              />
              <button className="px-4 font-medium border-y border-r  text-white tracking-wider transition-colors duration-300 transform bg-gray-700 rounded-r-full hover:bg-gray-600">
                <FaMagnifyingGlass />
              </button>
            </div>
          </form>
          <button className="flex items-center gap-1 px-4 border  font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded-full hover:bg-gray-600 py-1">
            <FaRecycle /> <span>Reset</span>
          </button>
          <div className="lg:w-1/6 flex justify-end gap-4">
            <button>
              <Grid />
            </button>
            <button>
              <AlignJustify />
            </button>
          </div>
        </div>
      </div> */}
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <p>No blogs found</p>
      )}
    </div>
  );
};

export default BlogsPage;
