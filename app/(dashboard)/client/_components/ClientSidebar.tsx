"use client";

import React from "react";
import { clientSidebarLinks } from "./ClientSidebarLink";
import { Nav } from "./Nav";
import DashboardLogo from "../../_components/DashboardLogo";
const ClientSidebar = () => {
  return (
    <div className="border-r h-screen py-4 px-2">
      <div className="flex gap-3 justify-center">
        <DashboardLogo />
      </div>
      {/* sidebar links */}
      <div className="mt-4">
        <Nav links={clientSidebarLinks} />
      </div>
    </div>
  );
};

export default ClientSidebar;
