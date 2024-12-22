import React from "react";
import DashboardMain from "./_components/ClientDashboardMain";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ClientDashboard = async () => {
  // const session = await getServerSession(authOptions);
  // console.log("user:", session);

  // if (typeof window === "undefined") return null;

  return (
    <div className="flex flex-col h-full w-full">
      <DashboardMain />
    </div>
  );
};

export default ClientDashboard;
