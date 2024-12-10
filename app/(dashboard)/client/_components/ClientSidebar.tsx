"use client";

import React from "react";
import { clientSidebarLinks } from "./ClientSidebarLink";
import { Nav } from "./Nav";
import Link from "next/link";
import Image from "next/image";
const ClientSidebar = () => {
  return (
    <div className="border-r h-screen py-8 px-2">
      <div className="flex gap-3 justify-center">
        <Link href="/" className="px-6">
          <Image
            src="/logo-h.svg"
            alt="Aamar Dokan"
            width={150}
            height={38}
            priority
          />
        </Link>
      </div>
      {/* sidebar links */}
      <div className="mt-4">
        <Nav links={clientSidebarLinks} />
      </div>
    </div>
  );
};

export default ClientSidebar;
