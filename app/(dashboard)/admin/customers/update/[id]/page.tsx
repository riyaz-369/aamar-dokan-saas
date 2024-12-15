import PageTitle from "@/components/PageTitle";
import React from "react";
import prisma from "@/prisma";
import CustomerForm from "../../_components/CustomerForm";

const UpdateUserPage = async () => {
  const data = await prisma.user.findFirst({
    // where: {
    //   id: "675a92ff2023f29ae580a19c",
    // },
  });
  // console.log(data);

  return (
    <div className="">
      <PageTitle title="Update Customer" />
      <CustomerForm entry={data} />
    </div>
  );
};

export default UpdateUserPage;
