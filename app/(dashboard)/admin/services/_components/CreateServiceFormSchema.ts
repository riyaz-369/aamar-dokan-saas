import { z } from "zod";

export const CreateServiceFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  code: z.string().min(1, "Code is required"),
  categoryId: z.string(),
  apiUrl: z.string().optional(),
  loginUrl: z.string().optional(),
  meta: z.record(z.any()).optional(),
  photo: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  tos: z.string().min(1, "Terms of service are required"),
  privacyPolicy: z.string().min(1, "Privacy policy is required"),
  status: z.enum(["Active", "Inactive"]).default("Active"),
});
