"use server";

import { z } from "zod";
import { UserFormSchema } from "./_components/UserFormSchema";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { Status } from "@prisma/client";
import bcrypt from "bcrypt";

type TUser = z.infer<typeof UserFormSchema>;

export const SaveUserIntoDB = async (data: TUser, id: string) => {
  // console.log(id, data);
  try {
    const { name, phone, email, username, password, type } = data;

    if (!name || !phone || !username || !password) return false;

    const hashPassword = await bcrypt.hash(password, 10);

    if (!id) {
      const createdUser = await prisma.user.create({
        data: {
          name,
          phone,
          email,
          username,
          password: hashPassword,
          type,
        },
      });
      if (createdUser) {
        revalidatePath("/admin/users");
        return createdUser;
      }
    } else {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          name,
          phone,
          email,
          username,
          password: hashPassword,
          type,
        },
      });
      if (updatedUser) {
        revalidatePath("/admin/users");
        return updatedUser;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const UpdateUserStatus = async (id: string, status: Status) => {
  try {
    const updateStatus = await prisma.user.update({
      where: {
        id: id,
      },
      data: { status },
    });

    if (updateStatus) {
      revalidatePath("/admin/users");
      return updateStatus;
    } else {
      return false;
    }
  } catch (error) {
    console.error("user update error", error);
    return false;
  }
};
