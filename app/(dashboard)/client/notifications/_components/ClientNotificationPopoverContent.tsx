import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Annoyed, CheckCircle, Eye, X } from "lucide-react";
import Link from "next/link";
import NotificationSkeleton from "./NotificationSkeleton";
import { NotificationArrayType } from "@/app/(dashboard)/_components/dashboard-breadcrumb";
import {
  deleteNotification,
  updateNotificationStatus,
} from "@/lib/action.notification";
import { NotificationStatus } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";

type ClientNotificationPopoverContentProps = {
  notifications: NotificationArrayType[];
  loading: boolean;
};

const ClientNotificationPopoverContent: React.FC<
  ClientNotificationPopoverContentProps
> = ({ notifications, loading }) => {
  const handleClearANotification = async (id: string) => {
    const u = await deleteNotification(id);
    console.log("update notification status", u);
  };

  const handleClearAllNotifications = async () => {
    const ua = await deleteNotification("");
    console.log("clear all notifications", ua);
  };

  const handleMarkAsRead = async (status: NotificationStatus) => {
    const updateReadStatus = await updateNotificationStatus(status);
    console.log("update read status", updateReadStatus);
  };

  return (
    <div>
      {notifications.length > 0 && (
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button
              onClick={handleClearAllNotifications}
              size="sm"
              variant="link"
              className="pl-1"
            >
              Clear All
            </Button>
            <Button
              onClick={() => handleMarkAsRead("Read")}
              size="sm"
              variant="link"
              className="pl-1 text-gray-900 dark:text-gray-200"
            >
              <CheckCircle />
              Mark as read
            </Button>
          </div>
          <Link href="/client/notifications">
            <Button
              className={cn("rounded-full py-0")}
              size="sm"
              variant="outline"
            >
              <Eye />
              View All
            </Button>
          </Link>
        </div>
      )}
      <ScrollArea className="h-[50vh]">
        {loading ? (
          <NotificationSkeleton />
        ) : notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="mt-3 relative">
              <button
                onClick={() => handleClearANotification(notification.id)}
                className="absolute right-1 top-2 hover:bg-muted p-1 rounded-full"
              >
                <X size={16} />
              </button>
              <Link
                href={{
                  pathname: `/client/notifications`,
                  query: { id: notification.id },
                }}
                className={`${"flex w-full flex-col gap-y-2 p-3 rounded-md hover:bg-muted focus:bg-gray-100 dark:focus:bg-gray-900 border"} ${
                  notification.notificationStatus === "Read" && "bg-muted"
                }`}
              >
                <div className="flex items-center">
                  <h4 className="font-semibold text-sm">
                    {notification.title}
                  </h4>
                </div>
                <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-300 text-start">
                  {notification.message}
                </p>
                <div className="flex justify-between items-center">
                  <Badge
                    className={cn(
                      "text-[10px]",
                      notification.notificationStatus === "Read" &&
                        "bg-opacity-50"
                    )}
                  >
                    {notification.type}
                  </Badge>
                  <span className="text-[11px] text-gray-700 dark:text-gray-400">
                    {formatDistanceToNow(new Date(notification.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex gap-y-4 items-center justify-center flex-col">
            <Annoyed className="text-primary" />
            <span className="text-center">
              <p>No notifications found.</p>
              <p>Check back later.</p>
            </span>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ClientNotificationPopoverContent;
