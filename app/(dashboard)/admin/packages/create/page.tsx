import PageTitle from "@/components/PageTitle";
import React from "react";
import PackageForm from "../_components/PackageForm";
import prisma from "@/prisma";

const CreateNewPackagePage = async () => {
  const services = await prisma.services.findMany({
    where: {
      status: "Active",
    },
  });

  // console.log(services);

  return (
    <div className=" px-8">
      <PageTitle title="Create New Package" />
      <PackageForm entry={{}} services={services} />
    </div>
  );
};

export default CreateNewPackagePage;
