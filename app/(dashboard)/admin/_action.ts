"use server";

import prisma from "@/prisma";

export const getCategoriesFromDB = async () => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
};
