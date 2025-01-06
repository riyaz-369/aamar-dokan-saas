/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import ProfileSettingForm from "./_components/ProfileSettingForm";
import PageTitle from "@/components/PageTitle";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getClientByPhone } from "@/app/(pages)/auth/_action";

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);
  //@ts-ignore
  const phone = session?.user?.phone;
  const client = await getClientByPhone(phone);
  console.log("client:", client);
  return (
    <div className="">
      <PageTitle title="Account Settings" />
      <ProfileSettingForm entry={{}} />
    </div>
  );
};

export default SettingsPage;
