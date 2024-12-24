import PageTitle from "@/components/PageTitle";
import React from "react";
import ServiceCard from "./_components/ServiceCard";
import prisma from "@/prisma";

const MyServicesPage = async () => {
  const services = await prisma.services.findMany({
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

  // console.log("services", services);

  return (
    <div className="flex flex-col h-[50vh] justify-between">
      <div>
        <PageTitle
          className="bg-gray-50 dark:bg-gray-900 py-4 px-4 rounded-lg"
          title="My Services"
        />
        {/* <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 my-6">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <ServiceCard key={idx} servicesProduct={idx} />
          ))}
        </div> */}
      </div>
      <div>
        <PageTitle
          title="Popular Services"
          className="bg-gray-50 dark:bg-gray-900 py-4 px-4 rounded-lg mt-12"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 mt-6">
          {services.length > 0
            ? services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            : "Not found"}
        </div>
      </div>
    </div>
  );
};

export default MyServicesPage;
