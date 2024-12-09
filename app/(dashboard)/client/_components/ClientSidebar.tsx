"use client";

import React from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { clientSidebarLinks } from "./ClientSidebarLink";
import { Nav } from "./Nav";
import Link from "next/link";
import Image from "next/image";
const ClientSidebar = () => {
  return (
    <TooltipProvider>
      <div className="relative min-w-[80px] border-r px-3 pt-6 h-screen">
        <div className="flex gap-3 justify-center">
          {/* <Button variant="ghost" className="relative h-8 w-8 rounded-full"> */}
          <Link href="/">
            <Image
              //   className="dark:invert"
              src="/logo-h.svg"
              alt="Aamar Dokan"
              width={150}
              height={38}
              priority
            />
          </Link>
          {/* <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  // session?.user?.photo
                  // session?.user?.photo
                  `https://github.com/shadcn.png`
                }
                // alt={session?.user?.name}
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar> */}
          {/* </Button> */}
          {/* <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">RIYAZ</p>
            <p className="text-xs leading-none text-muted-foreground"></p>
          </div> */}
        </div>

        {/* sidebar links */}
        <div className="pt-12 md:pt-4">
          <Nav isCollapsed={false} links={clientSidebarLinks} />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ClientSidebar;
