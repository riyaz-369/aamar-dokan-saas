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
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { PasswordFormSchema } from "./PassFormSchema";
import PasswordShowClose from "@/components/PasswordShowClose";
import { updatePassword } from "../../_action";
import type { z } from "zod";
// import bcrypt from "bcrypt";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface PasswordFormProps {
  id: string;
}

const PasswordForm = ({ id }: PasswordFormProps) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof PasswordFormSchema>>({
    resolver: zodResolver(PasswordFormSchema),
    defaultValues: {
      password: "",
      re_password: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof PasswordFormSchema>) {
    // console.log(data);
    setLoading(true);
    const updateCustomer = await updatePassword({
      id: id,
      data: data,
    });

    console.log("updateCustomer", updateCustomer);
    if (updateCustomer) {
      toast.success("Password Reset successfully");
      setLoading(false);
      router.push("/auth/sign-in");
    }
  }

  return (
    <div className="flex flex-col justify-end items-center">
      <div className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <PageTitle title="Reset Password" className="pb-4 text-center" />

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
            <FormField
              control={form.control}
              name="re_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
            <Button disabled={loading} className="w-full" type="submit">
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Change Password"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
};

export default PasswordForm;
