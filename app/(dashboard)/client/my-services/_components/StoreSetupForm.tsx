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
import { Textarea } from "@/components/ui/textarea";
import type { z } from "zod";

import React from "react";
import { StoreSetupFormSchema } from "./StoreSetupFormSchema";

const StoreSetupForm = () => {
  const form = useForm<z.infer<typeof StoreSetupFormSchema>>({
    resolver: zodResolver(StoreSetupFormSchema),
    defaultValues: {
      storeName: "",
      description: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      address: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(data: z.infer<typeof StoreSetupFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* storeName */}
        <FormField
          control={form.control}
          name="storeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Store Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your description here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your address here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default StoreSetupForm;
