import { z } from "zod";

export const PersonalInfoFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email().optional(),
  dob: z.date().optional(),
  gender: z.enum(["Male", "Female", "Other"]),
  photo: z.string().url().optional(),
});

export const AddressFormSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
});

export const SecurityFormSchema = z
  .object({
    password: z.string().min(6, { message: "Password minimum 6 characters" }),
    re_password: z.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords must match",
    path: ["re_password"],
  });
