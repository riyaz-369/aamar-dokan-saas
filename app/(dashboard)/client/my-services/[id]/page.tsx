/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import ServiceDetails from "./_components/ServiceDetails";
import PricingTable from "./_components/PricingTable";
import prisma from "@/prisma";
import MobilePricingTable from "./_components/MobilePricingTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isServiceIdExist } from "@/lib/utils";
import StoreSetupDialog from "./_components/StoreSetupDialog";

const SingleServiceProduct = async ({ params }: { params: { id: string } }) => {
  const client = await getServerSession(authOptions);
  const id = params?.id;
  // @ts-ignore
  const { aamardokanId } = client?.user;

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

  const myServices = await prisma.client.findUnique({
    where: {
      aamardokanId,
    },
    select: {
      services: true,
    },
  });

  // console.log(myServices);

  const isMyServiceExist = isServiceIdExist(myServices?.services, service.id);

  const packages = await prisma.package.findMany({
    where: {
      status: "Active",
    },
  });

  // console.log("form sss:", service);

  return (
    <div>
      <ServiceDetails service={service} isMyServiceExist={isMyServiceExist} />

      {/* conditional rendering */}
      <div>
        {!isMyServiceExist && (
          <>
            <div className="hidden md:block">
              <PricingTable plans={packages} service={service} />
            </div>
            <div className="md:hidden block">
              <MobilePricingTable plans={packages} service={service} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleServiceProduct;

// sotre name | username | storeaddress |
