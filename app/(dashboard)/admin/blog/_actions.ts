"use server";

import { z } from "zod";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { Status } from "@prisma/client";
import { BlogPostFormSchema } from "./_components/BlogPostFormSchema";

export type TBlogPost = z.infer<typeof BlogPostFormSchema>;

export const SaveBlogIntoDB = async (data: TBlogPost, id: string) => {
  console.log(id, data);
  try {
    const { title, content, categoryId, publishDate, meta, slug, tags, photo } =
      data;

    if (!id) {
      const createdBlogPost = await prisma.blog.create({
        data: {
          title,
          content,
          categoryId,
          publishDate,
          meta,
          slug,
          tags,
          photo,
        },
      });
      if (createdBlogPost) {
        revalidatePath("/admin/blog");
        return createdBlogPost;
      }
    } else {
      const updatedBlogPost = await prisma.blog.update({
        where: { id },
        data: {
          title,
          content,
          categoryId,
          publishDate,
          meta,
          slug,
          tags,
          photo,
        },
      });
      if (updatedBlogPost) {
        revalidatePath("/admin/blog");
        return updatedBlogPost;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const UpdateBlogStatus = async (id: string, status: Status) => {
  try {
    const updateStatus = await prisma.blog.update({
      where: {
        id: id,
      },
      data: { status },
    });

    if (updateStatus) {
      revalidatePath("/admin/blog");
      return updateStatus;
    } else {
      return false;
    }
  } catch (error) {
    console.error("blog update error", error);
    return false;
  }
};
