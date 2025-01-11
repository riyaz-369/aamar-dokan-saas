import { ContactMessageStatus } from "@prisma/client";

export type MailsType = {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string | null;
  company: string | null;
  message: string;
  status: ContactMessageStatus;
  createdAt: Date;
};
