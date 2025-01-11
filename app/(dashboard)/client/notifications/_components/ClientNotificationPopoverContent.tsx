import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const notifications = [
  {
    id: 1,
    name: "John Doe",
    date: "Jan 10, 2025",
    subject: "Project Update",
    text: "The project status has been updated. Please check your dashboard for more details.",
    badge: "Work",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "Jan 9, 2025",
    subject: "Meeting Reminder",
    text: "Don't forget about the team meeting scheduled for tomorrow at 10:00 AM.",
    badge: "Reminder",
  },
  {
    id: 3,
    name: "System Admin",
    date: "Jan 8, 2025",
    subject: "Security Alert",
    text: "Suspicious login detected. Please review your account activity immediately.",
    badge: "Alert",
  },
  {
    id: 4,
    name: "System Admin",
    date: "Jan 8, 2025",
    subject: "Security Alert",
    text: "Suspicious login detected. Please review your account activity immediately.",
    badge: "Alert",
  },
];

const ClientNotificationPopoverContent = () => {
  return (
    <div className="">
      <ScrollArea className="h-[50vh]">
        <div className="flex flex-col gap-y-3">
          {notifications.map((notification) => (
            <Link
              href={{
                pathname: `/client/notifications`,
                query: { id: notification.id },
              }}
              key={notification.id}
              className="flex w-full flex-col gap-2 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 focus:bg-gray-100 dark:focus:bg-gray-900"
            >
              <div className="flex justify-between w-full">
                <h4 className="font-semibold text-sm">{notification.name}</h4>
                <div className="text-xs text-gray-500 dark:text-gray-300">
                  {notification.date}
                </div>
              </div>
              <div className="text-xs font-medium text-gray-800 dark:text-gray-400">
                {notification.subject}
              </div>
              <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-300 text-start">
                {notification.text}
              </p>
              <div className="flex gap-2">
                <Badge className={cn("text-[10px]")}>
                  {notification.badge}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <Separator className={cn("my-4")} />
      <div className="flex justify-end mt-4">
        <Link href="/client/notifications">
          <Button size="sm" variant="outline">
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ClientNotificationPopoverContent;
