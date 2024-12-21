"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { SignInFormSchema } from "./SignInFormSchema";
import PasswordShowClose from "@/components/PasswordShowClose";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof SignInFormSchema>) {
    // console.log(data);
    try {
      const res = await signIn("adminCredentials", {
        phone: data.phone,
        password: data.password,
        redirect: false,
      });
      if (res?.ok) {
        toast.success("Logged in successfully!");
        router.push("/admin");
      } else {
        // setLoading(false);
        toast.error("Invalid phone or password");
      }
    } catch (error) {
      console.error({ error });
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-xs  w-full space-y-2 border p-6 rounded-md shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <PageTitle
              title="Signin Your Account"
              className="pb-4 text-center"
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
              SIgn In
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
};

export default SignInForm;
