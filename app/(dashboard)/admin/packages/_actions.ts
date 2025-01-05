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
    const {
      title,
      subtitle,
      code,
      features,
      price,
      serviceId,
      status,
      custom,
    } = data;

    if (!id) {
      const createdPackage = await prisma.package.create({
        data: {
          title,
          subtitle,
          serviceId,
          code,
          features,
          custom,
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
          custom,
        },
      });
      if (updatedPackage) {
        revalidatePath("/admin/packages");
        return updatedPackage;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const GetPackageCodeByPackageId = async (packageId: string) => {
  // console.log("packageId in action", packageId);
  try {
    const packageCode = await prisma.package.findUnique({
      where: {
        id: packageId,
      },
      select: {
        code: true,
      },
    });

    if (packageCode) {
      return packageCode;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Package code fetch error", error);
  }
};


export const GetPackageById = async (packageId: string) => {
  // console.log("packageId in action", packageId);
  try {
    const packageCode = await prisma.package.findUnique({
      where: {
        id: packageId,
      },
    });

    // console.log("Packege code: ", packageCode);
    if (packageCode) {
      return packageCode;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Package code fetch error", error);
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
