import { cookies } from "next/headers";
import { Notification } from "./_components/notification";
import prisma from "@/prisma";
import { NotificationDataTypes } from "@/lib/action.notification";

export default async function NotificationPage() {
  const layout = (await cookies()).get(
    "react-resizable-panels:layout:notification"
  );
  const collapsed = (await cookies()).get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  const notifications: NotificationDataTypes[] =
    await prisma.notification.findMany({
      where: { status: "Active" },
      select: {
        id: true,
        clientId: true,
        aamardokanId: true,
        type: true,
        message: true,
        status: true,
        notificationStatus: true,
        isAdminCreated: true,
        createdAt: true,
        title: true,
        client: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            photo: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

  return (
    <>
      <Notification
        notifications={notifications}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </>
  );
}
