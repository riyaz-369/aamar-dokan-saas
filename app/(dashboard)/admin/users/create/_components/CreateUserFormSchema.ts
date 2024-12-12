import { z } from "zod";

export const UserType = z.enum(["Admin", "Manager", "CustomerSupport"]);

export const CreateUserFormSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone is required" })
    .regex(/^\d+$/, { message: "Phone must be numeric" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  username: z.string().min(1, { message: "Username is required" }),
  type: UserType,
  permission: z.any().optional(),
});
