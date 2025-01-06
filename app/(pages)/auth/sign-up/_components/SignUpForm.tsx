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
import { createClient, generateAamarDokanPin } from "../../_action";
import type { z } from "zod";
import { toast } from "sonner";
import sendMessage from "@/lib/sms";
import { FaSpinner } from "react-icons/fa";
// import axios from "axios";

// import bcrypt from "bcrypt";
interface SignUpFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPin: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setAamardokanId: React.Dispatch<React.SetStateAction<string>>;
  setCustomerPhone: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  setStep,
  setPin,
  setId,
  setAamardokanId,
  setCustomerPhone,
}) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
      // console.log(data);
      setLoading(true);
      const createCustomer = await createClient(data);
      // console.log("createCustomer", createCustomer);
      if (createCustomer) {
        const pin = await generateAamarDokanPin(); // TODO:: send this pin again when resend otp
        setCustomerPhone(createCustomer.phone);
        setPin(pin);
        setId(createCustomer.id);
        setAamardokanId(createCustomer.aamardokanId);

        const message = `সম্মানিত গ্রাহক, আপনার "আমার দোকানের" ভেরিফিকেশন কোড: ${pin}`;
        const to = createCustomer.phone;
        sendMessage({ to, message }); // send otp to user
        // console.log("console code:", to, message);
        toast.success("Account creation successful");
        setLoading(false);
        setStep(2);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  // const OnchangePhone = async (phone: string) => {
  //   if (phone.length > 10) {
  //     const check = await checkPhone(phone);
  //     setPhoneDupicate(check);
  //     // console.log(phone, check);
  //   }
  // };

  return (
    <div className="flex flex-col justify-end items-center  ">
      <div className=" px-6 py-2 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <PageTitle
              title="Create Account"
              className="pb-3 text-primary text-center"
            />
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
                    <Input
                      placeholder="Phone"
                      // onKeyUp={(e) => OnchangePhone(e.target.value)}
                      {...field}
                    />
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
            <Button disabled={loading} className="w-full" type="submit">
              {loading && <FaSpinner className="animate-spin mr-2" />}
              Sign Up
            </Button>
          </form>
        </Form>
        <p className="flex items-center mt-4 justify-center">
          Already have an account?
          <Link href={"/auth/sign-in"}>
            <Button variant="link" className=" px-2 text-sm font-medium">
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
