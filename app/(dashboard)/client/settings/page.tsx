/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import ProfileSettingForm from "./_components/ProfileSettingForm";
// import PageTitle from "@/components/PageTitle";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);
  //@ts-ignore
  const phone = session?.user?.phone;
  const client = await prisma.client.findUnique({
    where: {
      phone: phone,
    },
  });

  // console.log("client:", client);

  return (
    <div className="">
      {/* <PageTitle title="Account Settings" /> */}
      <ProfileSettingForm entry={client} />
    </div>
  );
};

export default SettingsPage;
