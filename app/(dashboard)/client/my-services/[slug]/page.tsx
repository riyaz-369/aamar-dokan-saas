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

const SingleServiceProduct = async ({ params }: { params: { slug: string } }) => {
  const client = await getServerSession(authOptions);
  const slug = decodeURIComponent(params?.slug || "");

  // console.log("Decoded slug:", slug);
  // @ts-ignore
  const { aamardokanId } = client?.user;

  const service = await prisma.services.findUnique({
    where: {
      slug: slug,
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
      slug: true,
      status: true,
    },
  });

  // console.log("SERVICE:", service);

  const myServices = await prisma.client.findUnique({
    where: {
      aamardokanId,
    },
    select: {
      services: true,
    },
  });

  // console.log("MY-SERVICE:", myServices);

  const matchedService = (id:string) => {
    const services = myServices?.services;
    // console.log("first", services);
    return services?.find((service) => service?.serviceId === id);
  };

  const checkStoreSetup = (id:string) => {
    // console.log("MATCHED", matched);
    const matched = matchedService(id);
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
      serviceId: service?.id,
    },
  });

  // console.log("form sss:", service);

  return (
    <div>
      <ServiceDetails
        service={service}
        isMyServiceExist={isMyServiceExist}
        checkStoreSetup={checkStoreSetup(service?.id)}
        matchedServices={matchedService(service?.id )}
      />

      {/* conditional rendering */}
      <div>
        {!isMyServiceExist && (
          packages.length > 0 ?
          <>
            <div className="hidden md:block">
              <PricingTable plans={packages} service={service} />
            </div>
            <div className="md:hidden block">
              <MobilePricingTable plans={packages} service={service} />
            </div>
          </>
          :
          <div className="flex clex-row justify-center items-center h-[50vh]">
            <h2 className="text-2xl">No pricing plans found for this service</h2>
           
          </div>
        )} 
      </div>
    </div>
  );
};

export default SingleServiceProduct;
