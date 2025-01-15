"use client";

import * as React from "react";
import { PenBoxIcon, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MailList } from "./notification-list";
import { NotificationDisplay } from "./notification-display";
import { useNotification } from "../use-notification";
import { NotificationDataTypes } from "@/lib/action.notification";
import { Button } from "@/components/ui/button";
import CreateNewNotificationForm from "./CreateNewNotificationForm";

interface NotificationsProps {
  notifications: NotificationDataTypes[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
}

export function Notification({
  notifications,
  defaultLayout = [30, 48],
}: NotificationsProps) {
  const [showForm, setShowForm] = React.useState(false);
  const [notification] = useNotification();

  // console.log("notifications", notifications);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:notification=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="py-2 flex justify-between pr-4 pt-0">
              <TabsList className="">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All notification
                </TabsTrigger>
                <TabsTrigger
                  value="Sent"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Sent
                </TabsTrigger>
                <TabsTrigger
                  value="Unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
                <TabsTrigger
                  value="Read"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Read
                </TabsTrigger>
              </TabsList>
              <div className="">
                <Button variant="outline" onClick={() => setShowForm(true)}>
                  <PenBoxIcon />
                  Create a new notification
                </Button>
              </div>
            </div>
            <Separator />
            <div className="bg-background/95 py-4 pr-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <MailList items={notifications} setShowForm={setShowForm} />
            </TabsContent>
            <TabsContent value="Sent" className="m-0">
              <MailList
                setShowForm={setShowForm}
                items={notifications.filter(
                  (item) => item.isAdminCreated === true
                )}
              />
            </TabsContent>
            <TabsContent value="Read" className="m-0">
              <MailList
                setShowForm={setShowForm}
                items={notifications.filter(
                  (item) => item.notificationStatus === "Read"
                )}
              />
            </TabsContent>
            <TabsContent value="Unread" className="m-0">
              <MailList
                setShowForm={setShowForm}
                items={notifications.filter(
                  (item) => item.notificationStatus === "Unread"
                )}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          {showForm ? (
            <div className="p-4">
              <CreateNewNotificationForm />
            </div>
          ) : (
            <NotificationDisplay
              notification={
                notifications.find(
                  (item) => item.id === notification.selected
                ) || null
              }
            />
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
