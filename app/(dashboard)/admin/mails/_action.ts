"use server";

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
