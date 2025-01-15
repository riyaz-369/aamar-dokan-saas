"use server";

import prisma from "@/prisma";

export const getAllClientFromDB = async () => {
  try {
    const client = await prisma.client.findMany({
      select: {
        id: true,
        aamardokanId: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    if (client) {
      return client;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error getting client", error);
    return null;
  }
};
