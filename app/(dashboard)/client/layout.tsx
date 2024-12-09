import React from "react";
import ClientSidebar from "./_components/ClientSidebar";

const ClientDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <ClientSidebar />
      <div className="flex-grow p-8">{children}</div>
    </div>
  );
};

export default ClientDashboardLayout;
