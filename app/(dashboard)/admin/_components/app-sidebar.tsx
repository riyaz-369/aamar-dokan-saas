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
import DashboardLogo from "../../_components/DashboardLogo";
import { adminSidebarLinks } from "./AdminSidebarLink";
import DashboardProfile from "../../_components/DashboardProfile";

export function AppSidebar() {
  const pathName = usePathname();
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
              {adminSidebarLinks.map((item) => (
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
                        "justify-start text-md py-2 px-6 hover:bg-primary hover:text-white",
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
        <DashboardProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
