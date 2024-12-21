"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Toaster } from "@/components/ui/sonner";
import type { z } from "zod";
import { VerificationFormSchema } from "./PassFormSchema";
import PageTitle from "@/components/PageTitle";
import { toast } from "sonner";
import { updateClient } from "../../_action";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
// import axios from "axios";
interface VerificationFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  pin: string;
  id: string;
}

const VerificationForm: React.FC<VerificationFormProps> = ({
  setStep,
  pin,
  id,
}) => {
  const [loading, setLoading] = useState(false);
  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof VerificationFormSchema>>({
    resolver: zodResolver(VerificationFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof VerificationFormSchema>) {
    // data.password = await bcrypt.hash(data.password, 10);
    // console.log("OTP", data.pin, pin);
    if (data.pin !== "" && data.pin === pin) {
      setLoading(true);
      await updateClient({
        id: id,
        data: { isPhoneVerified: true },
      });
      setLoading(false);
      toast.success("Phone Verification successful");
      setStep(3);
    } else {
      toast.error("Code is not matched");
      form.setError("pin", {
        type: "manual",
        message: "OTP is not matched!",
      });
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-end items-center">
      <div className="py-4 rounded-lg">
        <PageTitle
          title="Verify your phone"
          className="pb-6 text-primary text-center"
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center space-y-6"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p>
                      Please enter the one-time password <br />
                      sent to your phone.
                    </p>
                  </FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    <div>
                      Don&apos;t get OTP <Button variant="link">Resend?</Button>
                    </div>
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button disabled={loading} type="submit" className="w-full">
              {loading ? <FaSpinner className="animate-spin" /> : "Verify"}
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
};

export default VerificationForm;
