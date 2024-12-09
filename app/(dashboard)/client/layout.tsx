import React from "react";
import ClientSidebar from "./_components/ClientSidebar";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClientSidebar />
      {children}
    </div>
  );
};

export default AdminDashboardLayout;
