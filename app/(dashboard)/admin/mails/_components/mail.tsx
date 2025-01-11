/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MailList } from "./mail-list";
import { MailDisplay } from "./mail-display";
import { useMail } from "../use-mail";
import { MailsType } from "../mails.interface";

interface MailProps {
  mails: MailsType[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
}

//@ts-ignore
export function Mail({ mails, defaultLayout = [30, 48] }: MailProps) {
  const [mail] = useMail();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="py-2">
              {/* <h1 className="text-xl font-bold">Inbox</h1> */}
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="Read"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Read
                </TabsTrigger>
                <TabsTrigger
                  value="Unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
                <TabsTrigger
                  value="Sent"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Sent
                </TabsTrigger>
                <TabsTrigger
                  value="Drafts"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Drafts
                </TabsTrigger>
                <TabsTrigger
                  value="Trash"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Trash
                </TabsTrigger>
                <TabsTrigger
                  value="Archive"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Archive
                </TabsTrigger>
              </TabsList>
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
              <MailList items={mails} />
            </TabsContent>
            <TabsContent value="Unread" className="m-0">
              <MailList
                items={mails.filter((item) => item.status === "Unread")}
              />
            </TabsContent>
            <TabsContent value="Read" className="m-0">
              <MailList
                items={mails.filter((item) => item.status === "Read")}
              />
            </TabsContent>
            <TabsContent value="Sent" className="m-0">
              <MailList
                items={mails.filter((item) => item.status === "Sent")}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          <MailDisplay
            mail={mails.find((item) => item.id === mail.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
