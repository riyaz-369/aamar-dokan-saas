import { checkUsername } from "@/app/(pages)/auth/_action";
import { z } from "zod";

export const StoreSetupFormSchema = z.object({
  storeName: z.string().min(1, { message: "Store name is required" }),
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .refine(
      async (username) => {
        const exists = await checkUsername(username);
        return !exists; // Fails validation if phone already exists
      },
      {
        message: "Username number already exists",
      },
    ),
  password: z.string().min(1, { message: "Password is required" }),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  post: z.string().optional(),
});
