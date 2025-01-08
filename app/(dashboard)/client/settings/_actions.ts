"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcrypt";
import prisma from "@/prisma";
import { revalidateTag } from "next/cache";

export const UpdateProfileSettingsIntoDB = async (
  data: any,
  aamardokanId: string
) => {
  console.log("Settings info from action:", data, aamardokanId);

  if (!data && !aamardokanId) return "Invalid data";

  try {
    const update = await prisma.client.update({
      where: { aamardokanId: aamardokanId },
      data: data,
    });
    console.log("update info", update);
    revalidateTag("client-cache");
    return update;
  } catch (error) {
    console.error("Error to update profile setting", error);
  }
};

export const UpdateProfileSettingPasswordIntoDB = async (
  data: any,
  aamardokanId: string
) => {
  // console.log("form update client action:", data, aamardokanId);

  if (!data && !aamardokanId) return "Invalid data";
  try {
    const hashPassword = await bcrypt.hash(data.password, 10);
    const password = {
      password: hashPassword,
    };

    const update = await prisma.client.update({
      where: { aamardokanId: aamardokanId },
      data: password,
    });
    revalidateTag("client-cache");
    return update;
  } catch (error) {
    console.error("password update error", error);
  }
};
