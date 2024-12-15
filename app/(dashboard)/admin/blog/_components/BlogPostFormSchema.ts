import { z } from "zod";

export const BlogPostFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title cannot exceed 100 characters" }),

  slug: z
    .string()
    .min(1, { message: "Slug must be at least 1 characters long" })
    .max(500, { message: "Slug cannot exceed 500 characters" })
    .regex(/^[a-z0-9-]+$/, {
      message: "Slug can only contain lowercase letters, numbers, and dashes",
    }),

  tags: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" })
    .max(50, { message: "Slug cannot exceed 50 characters" })
    .regex(/^[a-z0-9-]+$/, {
      message: "Slug can only contain lowercase letters, numbers, and dashes",
    }),

  categoryId: z.string().min(1, { message: "Category is required" }),

  metaTitle: z
    .string()
    .min(5, { message: "Meta Title must be at least 5 characters long" })
    .max(60, { message: "Meta Title cannot exceed 60 characters" }),

  metaDescription: z
    .string()
    .min(5, {
      message: "Meta Description must be at least 5 characters long",
    })
    .max(500, { message: "Meta Description cannot exceed 500 characters" }),

  publishDate: z.date({ required_error: "A date of birth is required." }),

  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters long" }),

  photo: z.string().optional(),
  // id: z.string().optional(),
});
