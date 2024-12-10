import React from "react";
import ClientSidebar from "./_components/ClientSidebar";
import DashboardNavbar from "../_components/DashboardNavbar";

const ClientDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <ClientSidebar />
      <div className="flex-grow">
        <DashboardNavbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default ClientDashboardLayout;
