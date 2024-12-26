import { z } from "zod";

export const StoreSetupFormSchema = z.object({
  storeName: z.string().min(1, { message: "Store name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  post: z.string().optional(),
});
