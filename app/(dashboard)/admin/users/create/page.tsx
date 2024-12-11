import PageTitle from "@/components/PageTitle";
import React from "react";
import CreateUserForm from "./_components/CreateUserForm";

const CreateNewUserPage = () => {
  return (
    <div className="">
      <PageTitle title="Create New User" />
      <CreateUserForm />
    </div>
  );
};

export default CreateNewUserPage;
