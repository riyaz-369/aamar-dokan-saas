"use server";

import prisma from "@/prisma";

export const SaveStoreInfoIntoClientDB = async (data, aamardokanId: string) => {
  // console.log("from  action", aamardokanId, data);
  try {
    const storeInfo = await prisma.client.update({
      where: {
        aamardokanId: aamardokanId, // Replace with your Aamardokan ID
      },
      data: {
        services: data,
      },
    });
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
