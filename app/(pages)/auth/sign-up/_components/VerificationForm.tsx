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
import { VerificationFormSchema } from "./SignUpFormSchema";
import PageTitle from "@/components/PageTitle";
import { toast } from "sonner";
import { generateAamarDokanPin, updateClient } from "../../_action";
import { FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";
import sendMessage from "@/lib/sms";

interface VerificationFormProps {
  id: string;
  pin: string;
  setPin: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  customerPhone: string;
}

const VerificationForm: React.FC<VerificationFormProps> = ({
  setStep,
  setPin,
  pin,
  id,
  customerPhone,
}) => {
  const [loading, setLoading] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(120);
  const [pinExpired, setPinExpired] = useState(false);

  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof VerificationFormSchema>>({
    resolver: zodResolver(VerificationFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof VerificationFormSchema>) {
    if (data.pin !== "" && data.pin === pin) {
      setLoading(true);
      if (pinExpired) {
        toast.error("OTP has expired. Please resend OTP.");
        setLoading(false);
        return;
      } else {
        await updateClient({
          id: id,
          data: { isPhoneVerified: true },
        });
        setLoading(false);
        toast.success("Phone Verification successful");
        setStep(3);
      }
    } else {
      toast.error("Code is not matched");
      setLoading(false);
    }
  }

  // Handle OTP resend
  const handleResendOtp = async () => {
    if (secondsRemaining > 0) return;
    setLoading(true);

    const newPin = await generateAamarDokanPin();
    setPin(newPin);

    const message = `সম্মানিত গ্রাহক, আপনার "আমার দোকানের" ভেরিফিকেশন কোড: ${newPin}`;
    const to = customerPhone;
    await sendMessage({ to, message });

    // console.log(message, to);

    if (newPin) {
      setSecondsRemaining(120); // Reset the countdown to 120 seconds
      setPinExpired(false);
      toast.success("OTP has been resent to your phone.");
      setLoading(false);
    } else {
      toast.error("Failed to resend OTP. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (secondsRemaining === 0) {
      setPinExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsRemaining]);

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

                  {/* Resend OTP  */}
                  <FormDescription>
                    <div className="flex justify-end">
                      {secondsRemaining > 0 ? (
                        <span>{secondsRemaining} Second remaining</span>
                      ) : (
                        <Button variant="link" onClick={handleResendOtp}>
                          Resend OTP
                        </Button>
                      )}
                    </div>
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button disabled={loading} type="submit" className="w-full">
              {loading ? <FaSpinner className="animate-spin" /> : ""}
              Verify
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
};

export default VerificationForm;
