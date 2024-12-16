import PageTitle from "@/components/PageTitle";
import React from "react";
import ServiceForm from "../_components/ServiceForm";

const CreateNewServicePage = () => {
  return (
    <div className="">
      <PageTitle title="Create New Service" />
      <ServiceForm entry={{}} />
    </div>
  );
};

export default CreateNewServicePage;
