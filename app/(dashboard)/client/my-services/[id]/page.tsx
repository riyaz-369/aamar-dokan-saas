/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import ServiceDetails from "./_components/ServiceDetails";
import PricingTable from "./_components/PricingTable";
import prisma from "@/prisma";
import MobilePricingTable from "./_components/MobilePricingTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isServiceIdExist } from "@/lib/utils";
// import StoreSetupDialog from "./_components/StoreSetupDialog";

const SingleServiceProduct = async ({ params }: { params: { id: string } }) => {
  const client = await getServerSession(authOptions);
  const id = params?.id;

  // console.log(id);
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
      loginUrl: true,
      category: {
        select: {
          name: true,
          id: true,
        },
      },
      photo: true,
    },
  });

  // console.log("MY-SERVICE:", service);

  const myServices = await prisma.client.findUnique({
    where: {
      aamardokanId,
    },
    select: {
      services: true,
    },
  });

  // console.log("MY-SERVICE:", myServices);

  const matchedService = () => {
    return myServices?.services?.find((service) => service?.serviceId === id);
  };

  const checkStoreSetup = () => {
    // console.log("MATCHED", matched);
    const matched = matchedService();
    if (matched?.username && matched?.password) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(checkStoreSetup());

  // console.log("MY-SERVICE:", services);
  const isMyServiceExist = isServiceIdExist(myServices?.services, service?.id);

  const packages = await prisma.package.findMany({
    where: {
      status: "Active",
    },
  });

  // console.log("form sss:", service);

  return (
    <div>
      <ServiceDetails
        service={service}
        isMyServiceExist={isMyServiceExist}
        checkStoreSetup={checkStoreSetup()}
        matchedServices={matchedService()}
      />

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
