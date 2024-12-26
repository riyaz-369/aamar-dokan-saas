import React from "react";

import ServiceDetails from "./_components/ServiceDetails";
import PricingTable from "./_components/PricingTable";
import prisma from "@/prisma";
import MobilePricingTable from "./_components/MobilePricingTable";

const SingleServiceProduct = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const service = await prisma.services.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      category: {
        select: {
          name: true,
          id: true,
        },
      },
      photo: true,
    },
  });

  // console.log(service);

  const packages = await prisma.package.findMany({
    where: {
      status: "Active",
    },
  });

  // console.log("form sss:", service);

  return (
    <div>
      <ServiceDetails service={service} />
      <div className="hidden md:block">
        <PricingTable plans={packages} service={service} />
      </div>
      <div className="md:hidden block">
        <MobilePricingTable plans={packages} service={service} />
      </div>
    </div>
  );
};

export default SingleServiceProduct;
