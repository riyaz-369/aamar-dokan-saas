"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/prisma";
import { z } from "zod";
import { ContactFormSchema } from "./_components/ContactFormSchema";

type ContactDataTypes = z.infer<typeof ContactFormSchema>;

export const SaveContactInfoIntoDB = async (data: ContactDataTypes) => {
  if (!data) {
    console.error("Missing required parameters: data.");
    return null;
  }

  try {
    const response = await prisma.contactUs.create({
      data: data,
    });

    revalidatePath("/contact");
    // console.log("Contact save", response);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
