"use client";

import React from "react";
import { Nav } from "./Nav";
import { adminSidebarLinks } from "./AdminSidebarLink";
import DashboardLogo from "../../_components/DashboardLogo";

const AdminSidebar = () => {
  return (
    <div className="border-r h-screen py-4 px-2">
      <div className="flex gap-3 justify-center">
        <DashboardLogo />
      </div>
      {/* sidebar links */}
      <div className="mt-4">
        <Nav links={adminSidebarLinks} />
      </div>
    </div>
  );
};

export default AdminSidebar;
