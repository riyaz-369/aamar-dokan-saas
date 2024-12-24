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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsBank } from "react-icons/bs";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_redux-store/store";
import {
  CreateTransactionIntoDB,
  SaveOrderIntoDB,
  updateClientServiceList,
} from "../_action";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { getClientServicesList } from "@/app/(pages)/auth/_action";
import { useSession } from "next-auth/react";

export function PaymentOptions() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bkash");
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const { data: session } = useSession();

  const orderData = useSelector((state: RootState) => state.orderSlice);
  const router = useRouter();

  const handleRadioSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  //@ts-ignore
  const { id, phone } = session?.user || "";

  // main handle function
  const handlePayment = async () => {
    const client = await getClientServicesList(phone);
    const { services } = client;
    try {
      loaderShow();
      // TO DO:: if payment successful then --> save the order information
      const order = await SaveOrderIntoDB(orderData);
      if (order) {
        const transactionInfo = {
          ...orderData,
          orderId: order.id,
          paymentId: "comeAfterPay",
          method: selectedPaymentMethod,
        };
        const transaction = await CreateTransactionIntoDB(transactionInfo);
        console.log("transaction", transaction);

        const clientServices = [
          ...services,
          {
            serviceId: orderData.serviceId,
            packageId: orderData.packageId,
            amount: orderData.amount,
            businessInfo: "",
            nextPayment: new Date(), // TODO:: make a date fns function for the next payment
          },
        ];
        if (transaction) {
          const updateClientInfo = await updateClientServiceList(
            clientServices,
            id
          );
          console.log(updateClientInfo);
          if (updateClientInfo) {
            router.push("/client/payment/success");
            loaderClose();
          }
        }
      }
    } catch (error) {
      loaderClose();
      console.error(error);
    }
  };

  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup
          defaultValue="bkash"
          className="grid grid-cols-3 gap-4"
          onValueChange={handleRadioSelect}
        >
          <div>
            <RadioGroupItem value="bkash" id="bkash" className="peer sr-only" />
            <Label
              htmlFor="bkash"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Image
                src="/BKash-Icon2-Logo.wine.png"
                priority
                alt=""
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
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
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
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <BsBank className="mb-3 h-6 w-6" />
              Bank
            </Label>
          </div>
        </RadioGroup>

        {/* Conditionally render card payment info */}
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
                    <SelectItem value="1">January</SelectItem>
                    <SelectItem value="2">February</SelectItem>
                    <SelectItem value="3">March</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">May</SelectItem>
                    <SelectItem value="6">June</SelectItem>
                    <SelectItem value="7">July</SelectItem>
                    <SelectItem value="8">August</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
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
      <Loader isOpen={loader} onClose={setLoader} title="Please Wait" />
    </Card>
  );
}
