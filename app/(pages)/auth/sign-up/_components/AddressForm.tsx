"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { SignUpFormSchema } from "./SignUpFormSchema";
import PasswordShowClose from "@/components/PasswordShowClose";
import { createClient } from "../../_action";
import type { z } from "zod";

const AddressForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof SignUpFormSchema>) {
    // data.password = await bcrypt.hash(data.password, 10);
    // console.log(data);
    const createCustomer = await createClient(data);
    // console.log("createCustomer", createCustomer);
  }

  return (
    <div className="flex flex-col justify-end items-center  ">
      <div className="border p-6 rounded-lg bg-primary">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <PageTitle title="Business Info" className="pb-4 text-center" />
            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage className="text-black" />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={`${eyeOpen ? "text" : "password"}`}
                        placeholder="Enter your password"
                        {...field}
                      />
                      <PasswordShowClose
                        eyeOpen={eyeOpen}
                        setEyeOpen={setEyeOpen}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <br />
            <Button variant="secondary" className="w-full" type="submit">
              SIgn Up
            </Button>
          </form>
        </Form>
        <p className="flex items-center mt-4 justify-center">
          Already have an account?
          <Link href={"/auth/sign-in"}>
            <Button
              variant="link"
              className="text-white px-2 text-sm font-medium"
            >
              Sign In
            </Button>
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default AddressForm;
