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
      orderBy: { createdAt: "desc" },
    });

  return (
    <>
      <div className="hidden flex-col md:flex">
        <Notification
          notifications={notifications}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
        />
      </div>
    </>
  );
}
