import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const NotificationSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton className="h-[30px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-5 w-[60px]" />
      </div>
    </div>
  );
};

export default NotificationSkeleton;
