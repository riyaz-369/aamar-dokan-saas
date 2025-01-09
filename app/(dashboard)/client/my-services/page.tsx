/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PageTitle from "@/components/PageTitle";
import React from "react";
import ServiceCard from "./_components/ServiceCard";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isServiceIdExist } from "@/lib/utils";

const MyServicesPage = async () => {
  const client = await getServerSession(authOptions);
  // @ts-ignore
  const { aamardokanId } = client?.user;

  const allServices = await prisma.services.findMany({
    where: {
      status: {
        not: "Inactive",
      },
    },
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      meta: true,
      category: true,
      photo: true,
      status: true,
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

  const parsedServices = myServices?.services?.map(async (service: any) => {
    const myServices = await prisma.services.findUnique({
      where: { id: service.serviceId },
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        photo: true,
        slug: true,
        apiUrl: true,
        loginUrl: true,
        code: true,
        tos: true,
        status: true,
      },
    });
    return { ...service, myServices, amount: service.amount };
  });

  // const isMyServiceExist = ;

  const resolvedServices = await Promise.all(parsedServices || []);

  // console.log("resolvedServices", resolvedServices);

  return (
    <div className="flex flex-col h-[50vh] justify-between">
      <div>
        <PageTitle className="" title="My Services" />

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 my-6">
          {resolvedServices.length > 0
            ? resolvedServices.map((service) => (
                // @ts-ignore
                <ServiceCard
                  key={service.id}
                  service={service.myServices}
                  isExist={service.myServicesid === service?.id}
                />
              ))
            : "You have not purchase any service."}
        </div>
      </div>
      <div>
        <PageTitle title="Popular Services" className=" mt-12" />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 my-6 pb-4">
          {allServices.length > 0
            ? allServices.map((service) => (
                // @ts-ignore
                <ServiceCard
                  key={service.id}
                  service={service}
                  isExist={isServiceIdExist(myServices?.services, service?.id)}
                />
              ))
            : "Not found"}
        </div>
      </div>
    </div>
  );
};

export default MyServicesPage;
