import PageTitle from "@/components/PageTitle";
import React from "react";
import CustomerForm from "../_components/CustomerForm";

const CreateNewCustomerPage = async () => {
  return (
    <div className="">
      <PageTitle title="Create New Customer" />
      <CustomerForm entry={{}} />
    </div>
  );
};

export default CreateNewCustomerPage;
