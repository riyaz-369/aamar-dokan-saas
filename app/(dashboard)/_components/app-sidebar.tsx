"use client";

import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  //   SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardLogo from "./DashboardLogo";
import DashboardProfile from "./DashboardProfile";
import { LinkType } from "../client/_components/ClientSidebarLink";
import { useSession } from "next-auth/react";
import ClientDashboardProfile from "./ClientDashboardProfile";

export function AppSidebar({ links }: { links: LinkType[] }) {
  const pathName = usePathname();
  const { data: session } = useSession();

  return (
    <Sidebar>
      <SidebarHeader>
        <DashboardLogo />
      </SidebarHeader>
      <SidebarContent className="mt-4">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      key={item.title}
                      href={item?.href}
                      className={cn(
                        buttonVariants({
                          variant:
                            item?.href === pathName ? "default" : "ghost",
                          size: "lg",
                        }),
                        "justify-start text-md px-6 hover:text-primary",
                      )}
                    >
                      {React.createElement(item.icon as React.ElementType, {
                        className: "",
                      })}
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {session?.user?.role === "client" ? (
          <ClientDashboardProfile />
        ) : (
          <DashboardProfile />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
