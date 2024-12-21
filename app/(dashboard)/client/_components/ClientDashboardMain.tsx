import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClientDashboardMain = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex gap-4">
        <div className="flex-1 md:w-4/6 px-10 flex items-center rounded-xl h-60 p-4 bg-[#2ECC71] overflow-hidden">
          {/* <div className="h-28 w-28 border-[#27AE60] rounded-full border-[20px] absolute top-0 left-0" /> */}
          {/* <div className="h-28 w-28 border-[#27AE60] rounded-full border-[20px] absolute bottom-0 right-0" /> */}
          <div className="w-2/3">
            <h1 className="text-white text-3xl">
              Good Morning, Manishankar Vakta!
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
        <div className="flex md:w-2/6 bg-muted/50 rounded-xl h-60 p-4">
          Hello 2
        </div>
      </div>
      <div className="h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};

export default ClientDashboardMain;
