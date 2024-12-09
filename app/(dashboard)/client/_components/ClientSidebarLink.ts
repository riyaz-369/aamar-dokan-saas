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
    href: "/dashboard/customer",
  },
  // {
  //   title: "Order History",
  //   label: "",
  //   icon: HistoryIcon,
  //   variant: "ghost",
  //   href: "/dashboard/customer/order-history",
  // },
  {
    title: "My Services",
    label: "",
    icon: HeartIcon,
    variant: "ghost",
    href: "/dashboard/customer/my-services",
  },
  // {
  //   title: "My Coupon",
  //   label: "",
  //   icon: RiCoupon2Line,
  //   variant: "ghost",
  //   href: "/dashboard/customer/my-coupon",
  // },
  // {
  //   title: "Live Chat",
  //   label: "",
  //   icon: IoChatbubbleEllipsesOutline,
  //   variant: "ghost",
  //   href: "/dashboard/customer/chat",
  // },
  {
    title: "Billing",
    label: "",
    icon: MdOutlinePayment,
    variant: "ghost",
    href: "/dashboard/customer/billing",
  },
  {
    title: "Setting",
    label: "",
    icon: Cog,
    variant: "ghost",
    href: "/dashboard/customer/setting",
  },
  {
    title: "Help Center",
    label: "",
    icon: MdHelpOutline,
    variant: "ghost",
    href: "/dashboard/customer/help-center",
  },
];
