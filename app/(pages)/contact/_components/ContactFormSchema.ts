import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .regex(/^\d+$/, { message: "Phone number must be numeric" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long" })
    .optional(),
  company: z
    .string()
    .min(3, { message: "Company name must be at least 3 characters long" })
    .optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});
