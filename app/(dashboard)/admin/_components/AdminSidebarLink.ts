import {
  Cog,
  LayoutDashboard,
  LucideIcon,
  User2Icon,
  User,
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
    title: "Services",
    label: "",
    icon: RiServiceLine,
    variant: "ghost",
    href: "/admin/services",
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
