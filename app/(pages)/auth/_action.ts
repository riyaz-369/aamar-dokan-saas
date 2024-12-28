/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import type { SignUpFormSchema } from "./sign-up/_components/SignUpFormSchema";
import bcrypt from "bcrypt";
import axios from "axios";

// Verification pin
export const generateAamarDokanPin = async () => {
  const pin = Math.floor(100000 + Math.random() * 900000).toString();

  return pin;
};

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

export type TClient = z.infer<typeof SignUpFormSchema>;

export const createClient = async (data: TClient) => {
  try {
    const { name, phone, password } = data;

    if (!name || !phone || !password) return false;
    const hashPassword = await bcrypt.hash(password, 10);
    const aamardokanId = await generateAamarDokanId();

    // console.log(aamardokanId);

    const createUser = await prisma.client.create({
      data: {
        name,
        phone,
        password: hashPassword,
        username: phone,
        aamardokanId: aamardokanId.toString(),
      },
    });
    // console.log(createUser);
    if (createUser) {
      // revalidatePath("/auth/sign-up");
      return createUser;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getClientServicesList = async (phone: string): Promise<any> => {
  try {
    // Check if a client exists with the given phone number
    const clientServicesList = await prisma.client.findUnique({
      where: {
        phone: phone,
      },
      select: {
        services: true,
      },
    });
    // console.log(clientServicesList);
    return clientServicesList;
  } catch (err) {
    console.error("Error checking phone number:", err);
    return false;
  }
};

export const checkPhone = async (phone: string): Promise<boolean> => {
  try {
    // Check if a client exists with the given phone number
    const client = await prisma.client.findUnique({
      where: {
        phone: phone, // Use the correct `where` clause
      },
    });

    // Return true if the client exists, otherwise return false
    return !!client; // `!!` converts to a boolean (true if found, false otherwise)
  } catch (err) {
    console.error("Error checking phone number:", err);
    return false; // Return false in case of an error
  }
};
export const checkUsername = async (username: {
  username: string;
}): Promise<boolean> => {
  console.log("Checking username", username);
  // const apiUrl = "http://localhost:5001/api";z
  const apiUrl = "https://api.aaamardokan.online/api";
  try {
    // Check if a client exists with the given phone number
    const existCustomer = await axios.get(
      `${apiUrl}/aamarDokan/username/${username}`,
    );

    console.log(existCustomer);

    if (existCustomer?.status) {
      return true;
    } else {
      return false;
    }

    // Return true if the client exists, otherwise return false
  } catch (err) {
    console.error("Error checking phone number:", err);
    return false; // Return false in case of an error
  }
};

export const getClientByPhone = async (phone: string): Promise<any> => {
  try {
    // Check if a client exists with the given phone number
    const client = await prisma.client.findUnique({
      where: {
        phone: phone, // Use the correct `where` clause
      },
      select: {
        id: true,
      },
    });

    // Return true if the client exists, otherwise return false
    return client; // `!!` converts to a boolean (true if found, false otherwise)
  } catch (err) {
    console.error("Error checking phone number:", err);
    return false; // Return false in case of an error
  }
};

export const updateClient = async ({ data, id }: { data: any; id: string }) => {
  // console.log("form update client action:", data, id);
  if (id) {
    try {
      const update = await prisma.client.update({
        where: { id: id },
        data: data,
      });
      revalidateTag("client-cache");
      return update;
    } catch (error) {
      console.error("[UPDATE CLIENT]", error);
    }
  }
};
export const updatePassword = async ({
  data,
  id,
}: {
  data: any;
  id: string;
}) => {
  if (id) {
    try {
      const hashPassword = await bcrypt.hash(data.password, 10);
      const password = {
        password: hashPassword,
      };
      const update = await prisma.client.update({
        where: { id: id },
        data: password,
      });
      revalidateTag("client-cache");
      return update;
    } catch (error) {
      console.error("[UPDATE CLIENT]", error);
    }
  }
};
