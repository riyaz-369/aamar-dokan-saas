import { z } from "zod";

export const PackageFormSchema = z.object({
  title: z.string().min(3, { message: "Package title is required" }),
  subtitle: z.string().optional(),
  serviceId: z.string().nonempty(),
  code: z.string().min(3, { message: "Package code is required" }),
  features: z.array(z.any()),
  custom: z.boolean(),
  price: z.object({
    monthly: z.number().min(0, { message: "Monthly price is required" }),
    yearly: z.number().min(0, { message: "Yearly price is required" }),
  }),
  status: z.enum(["Active", "Inactive"]),
});
