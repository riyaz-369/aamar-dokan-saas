import { z } from "zod";

export const StoreSetupFormSchema = z.object({
  storeName: z.string().min(1, { message: "Store name is required" }),
  description: z.string().optional(),
  street: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().optional(),
  zip: z.string().min(1, { message: "Zip code is required" }),
  country: z.string().optional(),
  address: z.string().min(1, { message: "Address is required" }),
  email: z.string().email({ message: "Email is invalid" }),
  phone: z
    .string()
    .min(10, { message: "Phone is required" })
    .regex(/^\d+$/, { message: "Phone must be numeric" }),
  //   logo: z.string().url({ message: "Logo URL is invalid" }),
});
