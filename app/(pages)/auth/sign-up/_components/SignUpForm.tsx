"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import axios from "axios";

const SignUpForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

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
    try {
      const response = await axios.post(`/api/client`, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-md w-full space-y-2 border p-6 rounded-md shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <PageTitle title="Create Account" className="pb-4 text-center" />
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
                  <FormMessage />
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
            <Button className="w-full" type="submit">
              SIgn Up
            </Button>
          </form>
        </Form>
        <p className="flex items-center mt-4 justify-center">
          Already have an account?
          <Link href={`/auth/sign-in`}>
            <Button variant="link" className="px-2 text-md font-semibold">
              Sign In
            </Button>
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpForm;
