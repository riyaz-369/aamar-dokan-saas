/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import DashboardMain from "./_components/ClientDashboardMain";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
import PageTitle from "@/components/PageTitle";
import ServiceCard from "./my-services/_components/ServiceCard";
import { isServiceIdExist } from "@/lib/utils";

const ClientDashboard = async () => {
  const client = await getServerSession(authOptions);
  // @ts-ignore
  const { aamardokanId } = client?.user;

  const allServices = await prisma.services.findMany({
    where: {
      NOT: {
        status: "Inactive",
      },
    },
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      meta: true,
      category: {
        select: {
          name: true,
          id: true,
        },
      },
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
        // packages: {
        //   select: {
        //     id: true,
        //     title: true,
        //     price: true,
        //   },
        // },
      },
    });
    return { ...service, myServices, amount: service.amount };
  });

  const resolvedServices = await Promise.all(parsedServices || []);

  return (
    <div className="flex flex-col h-full w-full pb-4">
      <DashboardMain />
      <div>
        <PageTitle
          title="View Popular Services"
          className="py-4 px-4 rounded-lg mt-12"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 mt-6 mb-8">
          {allServices.length > 0
            ? allServices.map((service) => (
                // @ts-ignore
                <ServiceCard
                  key={service.id}
                  // @ts-ignore
                  service={service}
                  // @ts-ignore
                  isExist={isServiceIdExist(myServices?.services, service?.id)}
                />
              ))
            : "Not found"}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
