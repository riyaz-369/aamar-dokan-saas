import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import useContactData from "../mails/useContactData";
import { FaSpinner } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

const AdminNotificationPopoverContent = () => {
  const notifications = useContactData();

  if (!notifications) {
    return <FaSpinner className="animate-spin" />;
  }

  return (
    <div className="">
      <ScrollArea className="h-[50vh]">
        <div className="flex flex-col gap-y-3">
          {notifications.map((notification) => (
            <Link
              href={{
                pathname: `/admin/mails`,
                query: { id: notification.id },
              }}
              key={notification.id}
              className="flex w-full flex-col gap-2 border p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 focus:bg-gray-100 dark:focus:bg-gray-900"
            >
              <div className="flex justify-between w-full">
                <h4 className="font-semibold text-sm">{notification.name}</h4>
                <div className="text-xs text-gray-500 dark:text-gray-300">
                  {formatDistanceToNow(new Date(notification?.createdAt), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium text-gray-800 dark:text-gray-400">
                {notification.subject}
              </div>
              <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-300 text-start">
                {notification.message}
              </p>
              <div className="flex gap-2">
                <Badge className={cn("text-[10px]")}>
                  {notification.status}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <Separator className={cn("my-4")} />
      <div className="flex justify-end mt-4">
        <Link href="/admin/mails">
          <Button size="sm" variant="outline">
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminNotificationPopoverContent;
