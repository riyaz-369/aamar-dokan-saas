import React from "react";
import AdminSidebar from "./_components/AdminSidebar";
import DashboardNavbar from "../_components/DashboardNavbar";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <AdminSidebar />

      <div className="flex-grow">
        <DashboardNavbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
