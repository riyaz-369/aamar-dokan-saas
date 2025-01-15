/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useEffect, useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
// import DashboardProfile from "./DashboardProfile";
import { Button } from "@/components/ui/button";
import { Bell, Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NotificationPopoverContent from "../client/notifications/_components/ClientNotificationPopoverContent";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import AdminNotificationPopoverContent from "../admin/_components/AdminNotificationPopoverContent";
import {
  getNotificationsForUser,
  NotificationDataTypes,
} from "@/lib/action.notification";
import { UserType } from "@/types/interface";
import { Badge } from "@/components/ui/badge";

export interface NotificationArrayType extends NotificationDataTypes {
  id: string;
}

const DashboardBreadCrumb = () => {
  const pathName = usePathname();
  const segments = pathName.split("/").filter((segment) => segment);
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState<NotificationArrayType[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const user = session?.user as UserType;

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await getNotificationsForUser(user?.id as string);
      //@ts-ignore
      setNotifications(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to fetch notifications", error);
    }
  };
  useEffect(() => {
    fetchNotifications();
  }, [user?.aamardokanId, user?.id]);

  const role = user?.role;

  const notificationCount = notifications.filter(
    (notification) => notification.notificationStatus === "Unread"
  ).length;

  console.log(notificationCount);

  return (
    <div className="flex justify-between items-center w-full z-50">
      <Breadcrumb>
        <BreadcrumbList>
          {segments.map((segment, index) => {
            const segmentPath = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            return (
              <BreadcrumbItem
                key={segment}
                className="hidden md:flex items-center space-x-2"
              >
                {/* Separator */}
                {isLast ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">
                      {decodeURIComponent(segment).replace("-", " ")}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <>
                    <BreadcrumbLink href={segmentPath} className="capitalize">
                      {" "}
                      {decodeURIComponent(segment).replace("-", " ")}
                    </BreadcrumbLink>
                    <BreadcrumbSeparator className="hidden md:block" />
                  </>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" className="relative h-10 w-9">
              <Badge
                className={cn("rounded-full px-1 py-0 absolute top-0 right-0")}
              >
                {notificationCount}
              </Badge>
              <Bell className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className={cn("w-80")}>
            {role === "Admin" ? (
              <AdminNotificationPopoverContent />
            ) : (
              <NotificationPopoverContent
                loading={loading}
                notifications={notifications}
              />
            )}
          </PopoverContent>
        </Popover>

        <Button variant="ghost">
          <Languages className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4 text-primary" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default DashboardBreadCrumb;
