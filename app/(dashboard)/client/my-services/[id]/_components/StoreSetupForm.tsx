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
import type { z } from "zod";

import React, { useEffect, useState } from "react";
import { StoreSetupFormSchema } from "./StoreSetupFormSchema";
import Loader from "@/components/Loader";
import { Separator } from "@/components/ui/separator";
import { GetClientFromDB, SaveStoreInfoIntoClientDB } from "../_action";
import { useSession } from "next-auth/react";

const StoreSetupForm = () => {
  const [client, setClient] = useState();
  const [loader, setLoader] = useState(false);
  // const loaderClose = () => setLoader(false);
  // const loaderShow = () => setLoader(true);

  const { data: session } = useSession();
  const { aamardokanId } = session?.user;

  const form = useForm<z.infer<typeof StoreSetupFormSchema>>({
    resolver: zodResolver(StoreSetupFormSchema),
    defaultValues: {
      storeName: "",
      username: "",
      password: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      post: "",
    },
  });

  useEffect(() => {
    if (client) {
      form.setValue("street", client?.street || "");
      form.setValue("city", client?.city || "");
      form.setValue("state", client?.state || "");
      form.setValue("zip", client?.zip || "");
      form.setValue("post", client?.post || "");
    }
  }, [client]);

  useEffect(() => {
    const getClient = async () => {
      const res = await GetClientFromDB(aamardokanId);
      setClient(res);
    };
    getClient();
  }, [aamardokanId]);

  async function onSubmit(data: z.infer<typeof StoreSetupFormSchema>) {
    // console.log("form data:", data);
    const res = await SaveStoreInfoIntoClientDB(data, aamardokanId);
    // console.log(res);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* storeName */}
        <FormField
          control={form.control}
          name="storeName"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-1/3">Store Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Store Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-1/3">Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-1/3">Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <div className="space-y-4">
          {/* street */}
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Street" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            {/* city */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* state */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* post */}
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Post" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* zip */}
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Zip Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <Loader isOpen={loader} onClose={setLoader} title="Please Wait" />
    </Form>
  );
};

export default StoreSetupForm;
