import React from "react";

import ServiceDetails from "./_components/ServiceDetails";
import PricingTable from "./_components/PricingTable";
import prisma from "@/prisma";
import MobilePricingTable from "./_components/MobilePricingTable";

const SingleServiceProduct = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const packages = await prisma.package.findMany({
    where: {
      status: "Active",
    },
  });

  const service = await prisma.services.findFirst({
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

  return (
    <div>
      <ServiceDetails service={service} />
      <div className="hidden md:block">
        <PricingTable plans={packages} />
      </div>
      <div className="md:hidden block">
        <MobilePricingTable plans={packages} />
      </div>
    </div>
  );
};

export default SingleServiceProduct;
