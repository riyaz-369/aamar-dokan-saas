import React from "react";
import AdminSidebar from "./_components/AdminSidebar";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminDashboardLayout;
