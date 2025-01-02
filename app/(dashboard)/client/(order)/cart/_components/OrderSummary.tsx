/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setOrderInfo, resetCart } from "@/app/_redux-store/slice/orderSlice";
import { useSession } from "next-auth/react";
import { PackageType } from "../page";
import {
  SaveOrderIntoDB,
  updateClientServiceList,
} from "../../payment/_action";
import { RootState } from "@/app/_redux-store/store";
import { getClientServicesList } from "@/app/(pages)/auth/_action";

type OrderSummaryProps = {
  packages: PackageType;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ packages }) => {
  const [checkTrams, setCheckTrams] = useState(false);
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  const orderData = useSelector((state: RootState) => state.orderSlice);

  const user = session?.user as {
    id: string;
    aamardokanId: string;
    phone: string;
  } | null;

  async function savePaymentInformation() {
    // @ts-ignore
    const client = await getClientServicesList(session?.user?.phone);
    // console.log("client from savePaymentInformation", client);
    const { services } = client;
    try {
      // const transactionInfo = {
      //   ...orderData,
      //   orderId: order.id,
      //   aamardokanId: order.aamardokanId,
      //   // paymentId: "comeAfterPay",
      //   method: "bkash",
      // };
      // const transaction = await CreateTransactionIntoDB(transactionInfo);
      // console.log("transaction", transaction);
      const marched = services.find(service => service.serviceId === orderData.serviceId);
      let clientServices = services;
      if (!marched){
        clientServices = [
          ...services,
          {
            serviceId: orderData.serviceId,
            packageId: orderData.packageId,
            amount: orderData.amount,
            nextPayment: new Date(), // TODO:: make a date fns function for the next payment
          },
        ];
      }

      // console.log("clientServices from savePaymentInformation", clientServices);

      const updateService = await updateClientServiceList(
        clientServices,
        user?.id as string
      );
      // console.log("updateService from savePaymentInformation", updateService);
      if(updateService){
        dispatch(resetCart())
        return updateService;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handlePlaceOrder = async () => {
    if (user) {
      dispatch(
        setOrderInfo({ aamardokanId: user.aamardokanId, clientId: user.id })
      );
    }
    if (!checkTrams) {
      return toast.error("Please accept our terms and conditions");
    }
    try {
      loaderShow();
      const order = await SaveOrderIntoDB(orderData);
      // console.log("order from handlePlaceOrder", order);
      if (order) {
        await savePaymentInformation();
        router.push("/client/payment/success");
        loaderClose();
      }
    } catch (error) {
      console.error("Error creating order:", error);
      loaderClose();
    }
  };

  return (
    <Card className="space-y-4 shadow-none max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Your order</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">{packages.title}</TableCell>
              <TableCell className="text-right">
                <span className="line-through opacity-80">
                  {packages.price.monthly}
                </span>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className="text-right font-semibold">
                0.00 BDT
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Separator />
        <div className="my-5">
          <p className="text-sm">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <Link
              target="_blank"
              href="/privacy-policy"
              className="text-primary hover:underline font-semibold"
            >
              Privacy policy.
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium flex items-center gap-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Checkbox onCheckedChange={(e) => setCheckTrams(!!e)} /> I have read
            and agree to the{" "}
            <Link
              target="_blank"
              href="/terms"
              className="text-primary hover:underline font-semibold"
            >
              terms and conditions.
            </Link>
          </label>
        </div>
        <Button
          onClick={handlePlaceOrder}
          type="submit"
          className="w-full mt-4"
        >
          Claim 1 month free premium
        </Button>
      </CardContent>
      <Loader isOpen={loader} onClose={loaderClose} title="Please Wait" />
    </Card>
  );
};

export default OrderSummary;
