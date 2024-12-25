import PageTitle from "@/components/PageTitle";
import React from "react";
import prisma from "@/prisma";
import ServiceForm from "../_components/ServiceForm";

const UpdateUserPage = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.services.findFirst({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      slug: true,
      code: true,
      tos: true,
      meta: true,
      photo: true,
      privacyPolicy: true,
      link1: true,
      link2: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  // console.log(data);

  return (
    <div className="">
      <PageTitle title="Update Service" />
      <ServiceForm entry={data} />
    </div>
  );
};

export default UpdateUserPage;
