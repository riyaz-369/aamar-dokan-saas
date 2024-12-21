"use server";

import { z } from "zod";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { Status } from "@prisma/client";
import { PackageFormSchema } from "./_components/PackageFormSchema";

export type PackagePropsType = z.infer<typeof PackageFormSchema>;

export const SavePackageIntoDB = async (data: PackagePropsType, id: string) => {
  // console.log(id, data);
  try {
    const { title, subtitle, code, features, price, serviceId, status } = data;

    if (!id) {
      const createdPackage = await prisma.package.create({
        data: {
          title,
          subtitle,
          serviceId,
          code,
          features,
          price,
          status,
        },
      });
      if (createdPackage) {
        revalidatePath("/admin/packages");
        return createdPackage;
      }
    } else {
      const updatedPackage = await prisma.package.update({
        where: { id },
        data: {
          title,
          subtitle,
          serviceId,
          code,
          features,
          status,
          price,
        },
      });
      if (updatedPackage) {
        revalidatePath("/admin/packages");
        return updatedPackage;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const UpdatePackageStatus = async (id: string, status: Status) => {
  try {
    const updateStatus = await prisma.package.update({
      where: {
        id: id,
      },
      data: { status },
    });

    if (updateStatus) {
      revalidatePath("/admin/packages");
      return updateStatus;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Package update error", error);
    return false;
  }
};
