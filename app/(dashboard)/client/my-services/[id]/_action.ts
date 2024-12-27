"use server";

import prisma from "@/prisma";

export const SaveStoreInfoIntoClientDB = async (data, aamardokanId: string) => {
  if (!data || !aamardokanId) {
    console.error("Missing required parameters: data or aamardokanId.");
    return null;
  }

  try {
    console.log("Updating client with Aamardokan ID:", aamardokanId);
    // console.log("Data to update:", data);

    const storeInfo = await prisma.client.update({
      where: {
        aamardokanId: aamardokanId, // Replace with your Aamardokan ID
      },
      data: {
        services: data,
      },
    });
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
    console.log(error);
    return null;
  }
};
