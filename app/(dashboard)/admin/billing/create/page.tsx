import PageTitle from "@/components/PageTitle";
import React from "react";
import CreateBillingForm from "./_components/CreateBillingForm";

const CreateNewUserPage = () => {
  return (
    <div className="">
      <PageTitle title="Create New User" />
      <CreateBillingForm />
    </div>
  );
};

export default CreateNewUserPage;
