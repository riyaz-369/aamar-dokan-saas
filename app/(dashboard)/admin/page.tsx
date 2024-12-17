import React from "react";
import AdminDashboardMain from "./_components/AdminDashboardMain";

const AdminDashboard = () => {
  // if (typeof window === "undefined") return null;
  return (
    <div className="flex flex-col h-full w-full">
      <AdminDashboardMain />
    </div>
  );
};

export default AdminDashboard;
