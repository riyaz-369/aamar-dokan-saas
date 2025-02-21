import PageTitle from "@/components/PageTitle";
import React from "react";
import prisma from "@/prisma";
import PackageForm from "../_components/PackageForm";

const UpdatePackagePage = async ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const services = await prisma.services.findMany({
    where: {
      status: "Active",
    },
  });

  // console.log("services", services);

  const packages = await prisma.package.findUnique({
    where: {
      id: id,
    },
  });

  // console.log(packages);

  return (
    <div className="">
      <PageTitle title="Update Package" className="px-8" />
      <PackageForm entry={packages} services={services} />
    </div>
  );
};

export default UpdatePackagePage;
