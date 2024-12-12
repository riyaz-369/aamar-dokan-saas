"use server";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { SignUpFormSchema } from "./sign-up/_components/SignUpFormSchema";

// Helper function to generate a random 6-digit unique ID
const generateAamarDokanId = async () => {
  const MAX_RETRIES = 3; // Maximum number of attempts to generate a unique ID

  for (let i = 0; i < MAX_RETRIES; i++) {
    const newAamarDokanId = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    // Check if the generated ID already exists in the database
    const existingCustomer = await prisma.client.findUnique({
      where: {
        aamardokanId: newAamarDokanId,
      },
    });

    if (!existingCustomer) {
      return newAamarDokanId;
    }
  }

  throw new Error("Failed to generate a unique customer ID");
};

// export const handleDelete = async (id: string) => {
//   // TODO:: Update Customer Due || Sales Info for delete transactions
//   try {
//     const deleteOffer = await prisma.transactions.delete({
//       where: {
//         id: id,
//       },
//     });
//     //  (deleteOffer);
//     if (deleteOffer) {
//       `${deleteOffer.name} deleted successful!`;
//       revalidatePath("/dashboard/accounts");
//       return deleteOffer;
//     }
//   } catch (err) {
//     err;
//     return false;
//   }
// };

export type TClient = z.infer<typeof SignUpFormSchema>;

export const createClient = async (data: TClient) => {
  try {
    const { name, phone, password } = data;

    if (!name || !phone || !password) return false;

    const aamardokanId = await generateAamarDokanId();

    console.log(aamardokanId);

    const createUser = await prisma.client.create({
      data: {
        name,
        phone,
        password,
        username: phone,
        aamardokanId: aamardokanId.toString(),
      },
    });
    console.log(createUser);
    if (createUser) {
      revalidatePath("/auth/sign-up");
      return createUser;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// export const getTransactionByDate = async ({
//   startDate,
//   endDate,
// }: {
//   startDate?: Date;
//   endDate?: Date;
// }) => {
//   const start = startOfDay(startDate ? new Date(startDate) : new Date());
//   const end = endOfDay(endDate ? new Date(endDate) : new Date());
//   // console.log(startDate, endDate);

//   const transactions = await prisma.transactions.findMany({
//     where: {
//       createdAt: {
//         gte: start,
//         lte: end,
//       },
//     },
//     select: {
//       id: true,
//       transactionId: true,
//       name: true,
//       amount: true,
//       date: true,
//       type: true,
//       createdAt: true,
//     },
//   });

//   const formattedData = transactions.map((transactions) => ({
//     ...transactions,
//     createdAt: format(new Date(transactions.createdAt), "MM/dd/yyyy"), // Format createdAt date
//   }));

//   return formattedData;
// };
