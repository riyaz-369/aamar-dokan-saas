import { z } from "zod";

export const SignInFormSchema = z.object({
  phone: z.string().min(1, { message: "Phone is required" }),
  password: z.string().min(6, { message: "Password minimum 6 character" }),
});
