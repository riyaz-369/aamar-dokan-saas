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
import {
  GetClientFromDB,
  getServiceById,
  SaveStoreInfoIntoClientDB,
} from "../_action";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";
import { GetPackageCodeByPackageId } from "@/app/(dashboard)/admin/packages/_actions";

const StoreSetupForm = ({ id, setIsOpen }: { id: string; setIsOpen: any }) => {
  const [client, setClient] = useState();
  const [serviceData, setServiceData] = useState();
  const [packageCode, setPackageCode] = useState("");
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);

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

  useEffect(() => {
    const getService = async () => {
      const service = await getServiceById(id);
      // console.log(id);
      // console.log(service.apiUrl);
      setServiceData(service?.apiUrl);
    };
    getService();
  }, [id]);

  const packageId = client?.services[0]?.packageId;

  useEffect(() => {
    const getPackageCode = async () => {
      const res = await GetPackageCodeByPackageId(packageId);
      if (res) {
        setPackageCode(res.code);
      }
    };
    if (packageId) {
      getPackageCode();
    }
  }, [packageId]);

  async function onSubmit(data: z.infer<typeof StoreSetupFormSchema>) {
    // console.log("form data:", data);
    const services = client?.services;

    // console.log("services", services);

    // if (res) {
    //TODO:: GENERATE  POS ACCOUNT
    const accountData = {
      name: client?.name,
      email: client?.email,
      warehouse: data?.storeName,
      phone: client?.phone,
      street: data?.street,
      city: data?.city,
      state: data?.state,
      zip: data?.zip,
      post: data?.post,
      aamarId: aamardokanId,
      username: data?.username,
      password: data?.password,
      pId: packageCode,
    };

    // TODO:: API CALL
    try {
      loaderShow();
      // console.log("accountData", accountData);
      if (!serviceData) {
        toast.error("Store setup Not successful");
        loaderClose();
        setIsOpen(false);
        return;
      }
      const posAccount = await axios.post(
        `${serviceData}/aamarDokan/create`,
        // "http://localhost:5001/api/aamardokan/create",
        accountData
      );
      // console.log("posAccount", posAccount);
      if (posAccount.status === 200) {
        // TODO: Save the client information to the database
        const matched = services.find((service) => service.serviceId === id);
        const rest = services.filter((service) => service.serviceId !== id);

        const newServices = [
          ...rest,
          { ...matched, ...data, status: "active" },
        ];

        const res = await SaveStoreInfoIntoClientDB(newServices, aamardokanId);
        // console.log(res);
        if (res) {
          loaderClose();
          toast.success("Store setup successful");
          setIsOpen(false);
        }
      } else {
        loaderClose();
        setIsOpen(false);
        toast.error("Store setup Not successful");
      }
    } catch (err) {
      console.error("POS ACCOUNT::", err);
      loaderClose();
    }
    // }
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
            <FormItem>
              <span className="flex items-center">
                <FormLabel className="w-1/3">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
              </span>
              <span className="flex justify-end">
                <FormMessage />
              </span>
            </FormItem>
          )}
        />
        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <span className="flex items-center">
                <FormLabel className="w-1/3">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
              </span>
              <span className="flex justify-end">
                <FormMessage />
              </span>
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
                <FormLabel className="w-1/3">Store Name</FormLabel>
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
