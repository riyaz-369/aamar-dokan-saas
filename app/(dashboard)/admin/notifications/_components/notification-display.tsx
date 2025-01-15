/* eslint-disable @typescript-eslint/no-explicit-any */

import { format } from "date-fns";
import { NotificationDataTypes } from "@/lib/action.notification";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MailDisplayProps {
  notification: NotificationDataTypes | null;
}

export function NotificationDisplay({ notification }: MailDisplayProps) {
  console.log("notification display", notification);

  return (
    <div className="flex h-full flex-col">
      {notification ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start px-4">
            <div className="flex items-center gap-4 text-sm">
              <Avatar>
                <AvatarImage
                  src={notification.client?.photo as string}
                  alt={notification.client?.name}
                />
                <AvatarFallback>
                  {notification.client?.name
                    .split(" ")
                    .map((chunk: any) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{notification.title}</div>
                <div className="line-clamp-1 text-xs">
                  <p>To: {notification.client?.name}</p>
                </div>
                <div className="line-clamp-1 text-xs"></div>
              </div>
            </div>
            {notification.createdAt && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(notification.createdAt), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {notification.message}
          </div>
          <Separator className="mt-auto" />
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
