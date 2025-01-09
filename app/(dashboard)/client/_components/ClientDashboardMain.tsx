/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ClientDashboardMain = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 md:w-4/6 w-full flex items-center rounded-xl px-12 bg-[#2ECC71] overflow-hidden">
          {/* <div className="h-28 w-28 border-[#27AE60] rounded-full border-[20px] absolute top-0 left-0" /> */}
          {/* <div className="h-28 w-28 border-[#27AE60] rounded-full border-[20px] absolute bottom-0 right-0" /> */}
          <div className="w-2/3">
            <h1 className="text-white text-3xl">
              Welcome, {session?.user?.name}!
            </h1>
            <p className="text-white text-lg">You have 20 notifications</p>
            <Button size="sm" className="mt-10">
              <Link href="/" className="text-md">
                Review All
              </Link>
            </Button>
          </div>
          <div className="w-1/3">
            <Image
              alt="Dashboard"
              src="/aamar-dokan-sign-up.svg"
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="flex bg-gray-300 rounded-lg md:w-2/6 w-full min-h-[120px] flex-col gap-4">
          Hi
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardMain;
