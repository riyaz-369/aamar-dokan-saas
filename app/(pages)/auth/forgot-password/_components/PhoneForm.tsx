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
import { PhoneFormSchema } from "./PassFormSchema";
import { generateAamarDokanPin, getClientByPhone } from "../../_action";
import { z } from "zod";
import { toast } from "sonner";
import sendMessage from "@/lib/sms";
import { FaSpinner } from "react-icons/fa";
// import axios from "axios";

// import bcrypt from "bcrypt";
interface SignUpFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPin: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneForm: React.FC<SignUpFormProps> = ({ setStep, setPin, setId }) => {
  // const [eyeOpen, setEyeOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof PhoneFormSchema>>({
    resolver: zodResolver(PhoneFormSchema),
    defaultValues: {
      phone: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof PhoneFormSchema>) {
    const { phone } = data;

    try {
      // console.log(data);
      setLoading(true);
      const customer = await getClientByPhone(phone);
      // console.log("customer", customer);
      if (customer) {
        const pin = await generateAamarDokanPin();
        setPin(pin);
        setId(customer.id);

        // const message = `সম্মানিত গ্রাহক, আপনার আমার দোকানের ভেরিফিকেশন কোড ${pin}`;
        // const to = customer.phone;
        // sendMessage({ to, message });
        toast.success("Phone verification code sent to your phone");
        setStep(2);
      } else {
        toast.error("No account Found with this phone");
        form.setError("phone", {
          type: "manual",
          message: "No account found with this phone",
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-end items-center w-64">
      <div className=" px-2 py-2 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <PageTitle
              title="Forgot Password"
              className="pb-3 text-primary text-center"
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

            <br />
            <Button disabled={loading} className="w-full" type="submit">
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Verify Phone"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
};

export default PhoneForm;
