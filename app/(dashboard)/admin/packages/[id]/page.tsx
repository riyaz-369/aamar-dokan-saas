import PageTitle from "@/components/PageTitle";
import React from "react";
import prisma from "@/prisma";
import PackageForm from "../_components/PackageForm";

const UpdatePackagePage = async ({ params }: { params: { id: string } }) => {
  const packages = await prisma.package.findMany({
    where: {
      status: "Active",
    },
  });

  // console.log(packages);

  return (
    <div className="">
      <PageTitle title="Update Package" />
      <PackageForm entry={packages} services={[]} />
    </div>
  );
};

export default UpdatePackagePage;
