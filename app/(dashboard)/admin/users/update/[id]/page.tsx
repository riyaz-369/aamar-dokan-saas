import PageTitle from "@/components/PageTitle";
import React from "react";
import UserForm from "../../_components/UserForm";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const UpdateUserPage = async () => {
  const user = await getServerSession(authOptions);

  // console.log("user:", user);

  const data = await prisma.user.findFirst({
    // where: {
    //   id: "675a92ff2023f29ae580a19c",
    // },
  });
  // console.log(data);

  return (
    <div className="">
      <PageTitle title="Update User" />
      <UserForm entry={data} />
    </div>
  );
};

export default UpdateUserPage;
