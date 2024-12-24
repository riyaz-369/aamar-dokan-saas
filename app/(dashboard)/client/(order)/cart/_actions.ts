"use server";

import prisma from "@/prisma";

export const GetAPackageFromDB = async (packageId: string) => {
  try {
    const pack = await prisma.package.findFirst({
      where: {
        id: packageId,
      },
      select: {
        id: true,
        title: true,
        subtitle: true,
        price: true,
        serviceId: true,
        code: true,
        service: true,
      },
    });
    console.log("package from action:", pack);
    return pack;
  } catch (error) {
    console.error(error);
  }
};
