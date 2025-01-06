import { z } from "zod";

const StatusEnum = z.enum(["Active", "Inactive"]);

export const ProfileSettingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email().optional(),
  gender: z.enum(["Male", "Female", "Other"]),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
  photo: z.string().url().optional(),
  username: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password must be at least 6 characters long"),
  dob: z.date().optional(),
  isPhoneVerified: z.boolean().optional(),
  status: StatusEnum.default("Active"),
});
