"use client";

import {
  Cog,
  LayoutDashboard,
  LucideIcon,
  User,
  User2Icon,
  PackageIcon,
  Logs,
  Mail,
  Bell,
} from "lucide-react";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiServiceLine, RiBillLine } from "react-icons/ri";

type LinkType = {
  title: string;
  label: string;
  icon: LucideIcon | unknown;
  variant: string;
  href: string;
};

export const adminSidebarLinks: LinkType[] = [
  {
    title: "Dashboard",
    label: "",
    icon: LayoutDashboard,
    variant: "default",
    href: "/admin",
  },
  {
    title: "Mails",
    label: "",
    icon: Mail,
    variant: "ghost",
    href: "/admin/mails",
  },
  {
    title: "Notifications",
    label: "",
    icon: Bell,
    variant: "ghost",
    href: "/admin/notifications",
  },
  {
    title: "Services",
    label: "",
    icon: RiServiceLine,
    variant: "ghost",
    href: "/admin/services",
  },
  {
    title: "Packages",
    label: "",
    icon: PackageIcon,
    variant: "ghost",
    href: "/admin/packages",
  },
  {
    title: "Blog",
    label: "",
    icon: MdOutlinePostAdd,
    variant: "ghost",
    href: "/admin/blog",
  },
  {
    title: "Customers",
    label: "",
    icon: User2Icon,
    variant: "ghost",
    href: "/admin/customers",
  },
  {
    title: "Orders",
    label: "",
    icon: Logs,
    variant: "ghost",
    href: "/admin/orders",
  },
  {
    title: "Billing",
    label: "",
    icon: RiBillLine,
    variant: "ghost",
    href: "/admin/billing",
  },
  {
    title: "Users",
    label: "",
    icon: User,
    variant: "ghost",
    href: "/admin/users",
  },
  {
    title: "Settings",
    label: "",
    icon: Cog,
    variant: "ghost",
    href: "/admin/settings",
  },
];
