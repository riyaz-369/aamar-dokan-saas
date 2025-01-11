"use server";

import nodemailer from "nodemailer";

import prisma from "@/prisma";
import { ContactMessageStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const GetContactUsDataFromDB = async () => {
  const contacts = await prisma.contactUs.findMany();
  if (contacts.length > 0) {
    return contacts;
  }
  return [];
};

export const UpdateMailStatusIntoDB = async (
  status: ContactMessageStatus,
  id: string
) => {
  if (!id && !status) return { message: "Id or status missing!" };

  const updateStatus = await prisma.contactUs.update({
    where: {
      id: id,
    },
    data: {
      status: status,
    },
  });

  if (updateStatus) {
    revalidatePath("/admin/mails");
    return updateStatus;
  }
};

type SendEmailProps = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  message: string;
};

export const SendEmail = async (payload: SendEmailProps) => {
  const emailAddress = process.env.EMAIL;
  const pass = process.env.APP_PASS;
  const { name, email, phone, message } = payload;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailAddress,
        pass: pass,
      },
    });

    await transporter.sendMail({
      from: email,
      to: emailAddress,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error("Error to send email", error);
    return { success: false };
  }
};
