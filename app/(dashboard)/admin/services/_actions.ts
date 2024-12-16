"use server";

import { z } from "zod";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { Status } from "@prisma/client";
import { CreateServiceFormSchema } from "./_components/CreateServiceFormSchema";

export type TService = z.infer<typeof CreateServiceFormSchema>;

export const SaveServiceIntoDB = async (data: TService, id: string) => {
  console.log(id, data);
  try {
    const {
      title,
      categoryId,
      meta,
      slug,
      description,
      code,
      privacyPolicy,
      status,
      tos,
      packages,
      photo,
    } = data;

    if (!id) {
      const createdService = await prisma.services.create({
        data: {
          title,
          description,
          categoryId,
          meta,
          slug,
          photo,
          code,
          privacyPolicy,
          tos,
          packages,
          status,
        },
      });
      if (createdService) {
        revalidatePath("/admin/services");
        return createdService;
      }
    } else {
      const updatedService = await prisma.services.update({
        where: { id },
        data: {
          title,
          description,
          categoryId,
          meta,
          slug,
          photo,
          code,
          privacyPolicy,
          tos,
          packages,
          status,
        },
      });
      if (updatedService) {
        revalidatePath("/admin/services");
        return updatedService;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const UpdateServiceStatus = async (id: string, status: Status) => {
  try {
    const updateStatus = await prisma.services.update({
      where: {
        id: id,
      },
      data: { status },
    });

    if (updateStatus) {
      revalidatePath("/admin/service");
      return updateStatus;
    } else {
      return false;
    }
  } catch (error) {
    console.error("service update error", error);
    return false;
  }
};
