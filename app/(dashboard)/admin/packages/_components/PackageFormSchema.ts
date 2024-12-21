import { z } from "zod";

const PackageType = z.enum(["Free", "Basic", "Premium"]);

export const PackageFormSchema = z.object({
  title: z.string().min(3, { message: "Package title is required" }),
  subtitle: z.string().optional(),
  serviceId: z.string().nonempty(),
  code: z.string().min(3, { message: "Package code is required" }),
  type: PackageType.default("Free"),
  features: z.array(z.any()),
  price: z.object({
    monthly: z.number().positive({ message: "Monthly price is required" }),
    yearly: z.number().positive({ message: "Yearly price is required" }),
  }),
  status: z.enum(["Active", "Inactive"]),
});
