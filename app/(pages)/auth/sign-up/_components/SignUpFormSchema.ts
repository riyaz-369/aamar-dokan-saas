import { z } from "zod";
import { checkPhone } from "../../_action";

export const SignUpFormSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^\d+$/, "Phone number must contain only digits")
    .refine(
      async (phone) => {
        const exists = await checkPhone(phone);
        return !exists; // Fails validation if phone already exists
      },
      {
        message: "Phone number already exists",
      },
    ),
  password: z.string().min(6, { message: "Password minimum 6 character" }),
});

export const InfoFormSchema = z.object({
  email: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
  dob: z.date().optional(),
});

// import bcrypt from "bcrypt";
export const VerificationFormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
