"use server";

import prisma from "@/prisma";

export const GetPackageFromDB = async (packCode: string) => {
  try {
    const pack = await prisma.package.findFirst({
      where: {
        code: packCode,
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
    // console.log("pack:", pack);
    return pack;
  } catch (error) {
    console.error(error);
  }
};
