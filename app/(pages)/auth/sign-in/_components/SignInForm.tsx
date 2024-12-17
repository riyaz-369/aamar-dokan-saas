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
import Link from "next/link";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { SignInFormSchema } from "./SignInFormSchema";
import PasswordShowClose from "@/components/PasswordShowClose";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const router = useRouter();

  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    // resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof SignInFormSchema>) {
    // console.log(data);
    try {
      const res = await signIn("clientCredentials", {
        phone: data.phone,
        password: data.password,
        redirect: false,
      });
      if (res?.ok) {
        toast.success("Logged in successfully!");
        router.push("/client");
      }
    } catch (error) {
      console.error({ error });
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-md w-full space-y-2  py-4 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <PageTitle
              title="Signin Your Account"
              className="pb-4 text-center text-primary"
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
        <p className="flex items-center mt-4 justify-center">
          Don&apos;t have an account?
          <Link href={`/auth/sign-up`}>
            <Button variant="link" className="px-2 text-md font-semibold">
              Sign Up
            </Button>
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SignInForm;
