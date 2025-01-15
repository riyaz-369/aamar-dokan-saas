"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NotificationFormSchema } from "./NotificationFormSchema";
import type { z } from "zod";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/Loader";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getAllClientFromDB } from "../_action";
import { saveNotification } from "@/lib/action.notification";
import { useSession } from "next-auth/react";
import { UserType } from "@/types/interface";
import { toast } from "sonner";

type ClientDataTypes = {
  id: string;
  aamardokanId: string;
  name: string;
};

const CreateNewNotificationForm = () => {
  const [clients, setClients] = React.useState<ClientDataTypes[]>([]);
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const { data: session } = useSession();

  const user = session?.user as UserType;

  React.useEffect(() => {
    const getClients = async () => {
      const res = await getAllClientFromDB();
      if (res) {
        setClients(res);
      }
    };
    getClients();
  }, []);

  const form = useForm<z.infer<typeof NotificationFormSchema>>({
    resolver: zodResolver(NotificationFormSchema),

    defaultValues: {
      clientId: "",
      title: "",
      message: "",
      type: "Alert",
    },
  });

  async function onSubmit(data: z.infer<typeof NotificationFormSchema>) {
    try {
      loaderShow();
      const aamardokanId = user?.aamardokanId as string;
      const sentNotification = await saveNotification({
        ...data,
        aamardokanId,
        isAdminCreated: true,
      });
      if (sentNotification) {
        loaderClose();
        toast.success("Notification sent successfully!");
        form.reset();
      } else {
        loaderClose();
        toast.error("Failed to send notification1");
      }
    } catch (error) {
      loaderClose();
      console.error(error);
      toast.error("Failed to send notification, please try again!");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-lg w-full space-y-2 border p-4 rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Customer */}
            <FormField
              control={form.control}
              name="clientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select a customer</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select customer" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map((client) => (
                          <SelectItem key={client.id} value={client.id}>
                            {client.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Notification Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notification Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Notification title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-28"
                      placeholder="Notification message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notification Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Info",
                          "Alert",
                          "Warning",
                          "Error",
                          "Success",
                          "Failed",
                          "Danger",
                        ].map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="icon" className="w-full" type="submit">
              <Send className="mr-2" /> Sent
            </Button>
          </form>
        </Form>
      </div>
      <Loader isOpen={loader} onClose={setLoader} title="Please Wait" />
    </div>
  );
};

export default CreateNewNotificationForm;
