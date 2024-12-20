import { z } from "zod";

export const PhoneFormSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export const PasswordFormSchema = z
  .object({
    password: z.string().min(6, { message: "Password minimum 6 characters" }),
    re_password: z.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords must match",
    path: ["re_password"], // Points the error to the re_password field
  });

// import bcrypt from "bcrypt";
export const VerificationFormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
