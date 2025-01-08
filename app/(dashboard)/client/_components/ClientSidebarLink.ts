"use client";

import { Cog, LayoutDashboard, Logs, LucideIcon } from "lucide-react";
import { MdHelpOutline } from "react-icons/md";
import { RiServiceLine, RiBillLine } from "react-icons/ri";

export type LinkType = {
  title: string;
  label: string;
  icon: LucideIcon | unknown;
  variant: string;
  href: string;
};

export const clientSidebarLinks: LinkType[] = [
  {
    title: "Dashboard",
    label: "",
    icon: LayoutDashboard,
    variant: "default",
    href: "/client",
  },
  {
    title: "My Services",
    label: "",
    icon: RiServiceLine,
    variant: "ghost",
    href: "/client/my-services",
  },
  {
    title: "My Orders",
    label: "",
    icon: Logs,
    variant: "ghost",
    href: "/client/my-orders",
  },
  {
    title: "Billing",
    label: "",
    icon: RiBillLine,
    variant: "ghost",
    href: "/client/billing",
  },
  {
    title: "Settings",
    label: "",
    icon: Cog,
    variant: "ghost",
    href: "/client/settings",
  },
  {
    title: "Help Center",
    label: "",
    icon: MdHelpOutline,
    variant: "ghost",
    href: "/client/help-center",
  },
];
