"use server";

import { z } from "zod";
import { CreateUserFormSchema } from "./_components/CreateUserFormSchema";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export type TUser = z.infer<typeof CreateUserFormSchema>;

export const createUser = async (data: TUser) => {
  try {
    const { name, phone, email, username, password, type } = data;
    const photo = data?.photo?.name;

    if (!name || !phone || !username || !password) return false;

    const createUser = await prisma.user.create({
      data: {
        name,
        phone,
        email,
        username,
        password,
        type,
        photo,
      },
    });
    if (createUser) {
      revalidatePath("/admin/users");
      return createUser;
    }
  } catch (err) {
    console.log(err);
  }
};
