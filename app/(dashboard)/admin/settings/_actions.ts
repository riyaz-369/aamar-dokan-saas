"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcrypt";
import prisma from "@/prisma";
import { revalidateTag } from "next/cache";

export const UpdateAdminPersonalInfoIntoDB = async (data: any, id: string) => {
  // console.log("Settings info from action:", data, id);

  if (!data && !id) return "Invalid data";

  try {
    const update = await prisma.user.update({
      where: { id: id },
      data: data,
    });
    // console.log("update info", update);
    revalidateTag("user-cache");
    return update;
  } catch (error) {
    console.error("Error to update profile setting", error);
  }
};

export const UpdateAdminPasswordIntoDB = async (data: any, id: string) => {
  // console.log("form update user action:", data, id);

  if (!data && !id) return "Invalid data";
  try {
    const hashPassword = await bcrypt.hash(data.password, 10);
    const password = {
      password: hashPassword,
    };

    const update = await prisma.user.update({
      where: { id: id },
      data: password,
    });
    revalidateTag("user-cache");
    return update;
  } catch (error) {
    console.error("password update error", error);
  }
};
