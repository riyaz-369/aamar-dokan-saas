import PageTitle from "@/components/PageTitle";
import React from "react";
import prisma from "@/prisma";
import ServiceForm from "../_components/ServiceForm";

const UpdateUserPage = async ({ params }: { params: { id: string } }) => {
  const data = await prisma.services.findFirst({
    where: {
      id: params.id,
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
