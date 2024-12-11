import PageTitle from "@/components/PageTitle";
import React from "react";
import CreateCustomerForm from "./_components/CreateCustomerForm";

const CreateNewCustomerPage = () => {
  return (
    <div className="">
      <PageTitle title="Create New Customer" />
      <CreateCustomerForm />
    </div>
  );
};

export default CreateNewCustomerPage;
