/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import axios from "axios";
import { RootState } from "@/app/_redux-store/store";
import { useSelector } from "react-redux";
import { BsBank } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function PaymentOptions() {
  const [loader, setLoader] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("bkash"); // Added state for payment method

  const { data: session } = useSession();
  const orderData = useSelector((state: RootState) => state.orderSlice);

  const handlePayment = async () => {
    if (!orderData.amount || !orderData.orderId) {
      console.error("Missing order data");
      return toast.error("Missing order data");
    }

    const paymentData = {
      amount: orderData.amount.toString(),
      //@ts-ignore
      aamardokanId: session?.user?.aamardokanId || "",
      orderId: orderData.orderId,
    };

    try {
      setLoader(true);
      const createResponse = await axios.post(
        "/api/payment/create",
        paymentData
      );

      if (createResponse?.data?.bkashURL) {
        console.log("Payment Created Successfully", createResponse.data);
        window.location.href = createResponse.data.bkashURL;
      } else {
        console.error("Payment creation failed: Missing bKash URL");
      }
    } catch (error) {
      console.error("Payment request failed", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <Card className="max-w-md w-full space-y-6">
      <CardHeader className="text-center">
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-center flex-col mb-6">
          <RadioGroup
            value={selectedPaymentMethod}
            onValueChange={setSelectedPaymentMethod}
            className="flex items-center justify-center"
          >
            <div>
              <RadioGroupItem
                value="bkash"
                id="bkash"
                className="peer sr-only"
              />
              <Label
                htmlFor="bkash"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
              >
                <Image
                  src="/BKash-Icon2-Logo.wine.png"
                  priority
                  alt="bKash"
                  height={60}
                  width={60}
                />
                bKash
              </Label>
            </div>
            <div>
              <RadioGroupItem
                disabled
                title="Currently not available"
                value="card"
                id="card"
                className="peer sr-only"
              />
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mb-3 h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                Card
              </Label>
            </div>
            <div>
              <RadioGroupItem
                disabled
                title="Currently not available"
                value="bank"
                id="bank"
                className="peer sr-only"
              />
              <Label
                htmlFor="bank"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
              >
                <BsBank className="mb-3 h-6 w-6" />
                Bank
              </Label>
            </div>
          </RadioGroup>
        </div>

        {selectedPaymentMethod === "card" && (
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="First Last" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Card number</Label>
              <Input id="number" placeholder="Card number" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="month">Expires</Label>
                <Select>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month, index) => (
                      <SelectItem key={index} value={`${index + 1}`}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Year</Label>
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${new Date().getFullYear() + i}`}
                      >
                        {new Date().getFullYear() + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="CVC" />
              </div>
            </div>
          </div>
        )}

        <Button onClick={handlePayment} className="w-full">
          Continue
        </Button>
      </CardContent>
      <Loader
        isOpen={loader}
        onClose={() => setLoader(false)}
        title="Please Wait"
      />
    </Card>
  );
}
