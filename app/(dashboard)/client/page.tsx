/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import DashboardMain from "./_components/ClientDashboardMain";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
import PageTitle from "@/components/PageTitle";
import ServiceCard from "./my-services/_components/ServiceCard";

const ClientDashboard = async () => {
  const client = await getServerSession(authOptions);
  // @ts-ignore
  const { aamardokanId } = client?.user;

  const allServices = await prisma.services.findMany({
    where: {
      status: "Active",
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

  // const session = await getServerSession(authOptions);
  // console.log("user:", session);

  // if (typeof window === "undefined") return null;

  return (
    <div className="flex flex-col h-full w-full">
      <DashboardMain resolvedServices={resolvedServices} />
      <div>
        <PageTitle
          title="View Popular Services"
          className="bg-gray-50 dark:bg-gray-900 py-4 px-4 rounded-lg mt-12"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 mt-6">
          {allServices.length > 0
            ? allServices.map((service) => (
                // @ts-ignore
                <ServiceCard key={service.id} service={service} />
              ))
            : "Not found"}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
