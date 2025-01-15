import { z } from "zod";

export const NotificationType = z.enum([
  "Info",
  "Alert",
  "Warning",
  "Error",
  "Success",
  "Failed",
  "Danger",
]);

export const NotificationFormSchema = z.object({
  clientId: z.string().nonempty({ message: "Customer is required" }),
  title: z.string().min(3, { message: "Title is required" }),
  message: z.string().min(3, { message: "Message is required" }),
  type: NotificationType,
});
