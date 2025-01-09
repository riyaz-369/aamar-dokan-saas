/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import ProfileSettingForm from "./_components/ProfileSettingForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
import { UserType } from "@/types/interface";

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserType;

  const data = await prisma.user.findUnique({
    where: {
      phone: user?.phone,
    },
  });

  // console.log("data:", data);

  return (
    <>
      <ProfileSettingForm entry={data} />
    </>
  );
};

export default SettingsPage;
