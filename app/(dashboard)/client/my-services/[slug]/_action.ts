"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export const SaveStoreInfoIntoClientDB = async (data, aamardokanId: string) => {
  if (!data || !aamardokanId) {
    console.error("Missing required parameters: data or aamardokanId.");
    return null;
  }

  try {
    // console.log("Updating client with Aamardokan ID:", aamardokanId);
    // console.log("Data to update:", data);

    const storeInfo = await prisma.client.update({
      where: {
        aamardokanId: aamardokanId, // Replace with your Aamardokan ID
      },
      data: {
        services: data,
      },
    });
    if (storeInfo) {
      const dynamicPath = `/client/my-services/`;
      revalidatePath(dynamicPath);
    }
    // console.log("STORE INFO", storeInfo);
    return storeInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const GetClientFromDB = async (aamardokanId: string) => {
  try {
    const client = await prisma.client.findUnique({
      where: {
        aamardokanId: aamardokanId,
      },
    });
    return client;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getServiceById = async (id: string) => {
  try {
    const service = await prisma.services.findUnique({
      where: { id: id },
    });
    return service;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const GetAllPackageFromDB = async () => {
  try {
    const pack = await prisma.package.findMany({
      where: {
        isFree: false,
        status: "Active",
      },
      // select: {
      //   id: true,
      //   title: true,
      //   subtitle: true,
      //   price: true,
      //   serviceId: true,
      //   code: true,
      //   service: true,
      //   isFree: true,
      //   features: true,
      // },
    });
    console.log("package res from action:", pack);
    return pack;
  } catch (error) {
    console.error(error);
  }
};
