"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/prisma";
import { NotificationStatus, NotificationType, Status } from "@prisma/client";

export interface NotificationDataTypes {
  clientId: string;
  aamardokanId: string | null;
  title: string;
  message: string;
  type: NotificationType;
  notificationStatus?: NotificationStatus;
  status?: Status;
}

export const saveNotification = async (data: NotificationDataTypes) => {
  if (!data) {
    console.error("Missing required parameters: data.");
    return null;
  }

  try {
    const response = await prisma.notification.create({
      data: {
        clientId: data.clientId,
        aamardokanId: data.aamardokanId,
        title: data.title,
        message: data.message,
        type: data.type,
      },
    });
    revalidatePath("/client");
    return response;
  } catch (error) {
    console.error("error to create notification", error);
    return null;
  }
};

export const getNotificationsForUser = async (clientId: string) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { clientId, status: "Active" },
      orderBy: { createdAt: "desc" },
    });
    // console.log("notifications", notifications);
    if (notifications) {
      revalidatePath("/client");
      return notifications;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteNotification = async (id: string) => {
  try {
    if (id) {
      const updateANotificationStatus = await prisma.notification.update({
        where: {
          id: id,
        },
        data: {
          status: "Inactive",
        },
      });
      if (updateANotificationStatus) {
        revalidatePath("/client");
        return updateANotificationStatus;
      }
    } else {
      const updateAllNotificationStatus = await prisma.notification.updateMany({
        data: {
          status: "Inactive",
        },
      });
      if (updateAllNotificationStatus) {
        revalidatePath("/client");
        return updateAllNotificationStatus;
      }
    }
  } catch (error) {
    console.error("Error updating notification status", error);
    return "Error updating notification status.";
  }
};

export const updateNotificationStatus = async (status: NotificationStatus) => {
  try {
    const updateAllNotificationStatus = await prisma.notification.updateMany({
      data: {
        notificationStatus: status,
      },
    });
    if (updateAllNotificationStatus) {
      revalidatePath("/client");
      return updateAllNotificationStatus;
    }
  } catch (error) {
    console.error("Error updating notification status", error);
    return "Error updating notification status.";
  }
};
