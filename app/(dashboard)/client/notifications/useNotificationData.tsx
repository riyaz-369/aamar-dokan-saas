/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import {
  getNotificationsForUser,
  NotificationDataTypes,
} from "@/lib/action.notification";
import { UserType } from "@/types/interface";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useNotificationData = () => {
  const [notificationData, setNotificationData] = useState<
    NotificationDataTypes[]
  >([]);
  const { data: session } = useSession();

  const user = session?.user as UserType;

  useEffect(() => {
    const getData = async () => {
      const clientNotifications = await getNotificationsForUser(
        user?.id as string
      );
      //@ts-ignore
      setNotificationData(clientNotifications);
    };
    getData();
  }, []);

  if (notificationData.length > 0) {
    return notificationData;
  }
  return [];
};

export default useNotificationData;
