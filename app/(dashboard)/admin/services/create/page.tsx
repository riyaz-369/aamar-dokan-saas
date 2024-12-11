import PageTitle from "@/components/PageTitle";
import React from "react";
import CreateServiceForm from "./_components/CreateServiceForm";

const CreateNewServicePage = () => {
  return (
    <div className="">
      <PageTitle title="Create New Service" />
      <CreateServiceForm />
    </div>
  );
};

export default CreateNewServicePage;
