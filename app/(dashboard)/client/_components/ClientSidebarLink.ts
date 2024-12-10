import { Cog, LayoutDashboard, HeartIcon } from "lucide-react";
import { MdOutlinePayment, MdHelpOutline } from "react-icons/md";

type LinkType = {
  title: string;
  label: string;
  icon: unknown;
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
    icon: HeartIcon,
    variant: "ghost",
    href: "/client/my-services",
  },
  {
    title: "Billing",
    label: "",
    icon: MdOutlinePayment,
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
