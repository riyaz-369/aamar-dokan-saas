import PageTitle from "@/components/PageTitle";
import React from "react";
import UserForm from "../_components/UserForm";

const CreateNewUserPage = () => {
  return (
    <div className="">
      <PageTitle title="Create New User" />
      <UserForm />
    </div>
  );
};

export default CreateNewUserPage;
