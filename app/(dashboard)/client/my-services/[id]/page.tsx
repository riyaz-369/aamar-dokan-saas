import React from "react";

import ServiceDetails from "./_components/ServiceDetails";
import PricingTable from "./_components/PricingTable";
import prisma from "@/prisma";
import MobilePricingTable from "./_components/MobilePricingTable";

const SingleServiceProduct = async () => {
  const packages = await prisma.package.findMany({
    where: {
      status: "Active",
    },
  });

  return (
    <div>
      <ServiceDetails />
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
