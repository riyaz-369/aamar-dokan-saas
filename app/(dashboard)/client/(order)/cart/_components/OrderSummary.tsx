/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { resetCart, setOrderId } from "@/app/_redux-store/slice/orderSlice";
// import { useSession } from "next-auth/react";
import { PackageType } from "../page";
import { RootState } from "@/app/_redux-store/store";
import {
  SaveOrderIntoDB,
  updateClientServiceListIntoBD,
} from "../../payment/_action";
import { getClientServicesList } from "@/app/(pages)/auth/_action";
import { add } from "date-fns";

type OrderSummaryProps = {
  packages: PackageType;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ packages }) => {
  const [checkTrams, setCheckTrams] = useState(false);
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const router = useRouter();
  const dispatch = useDispatch();
  // Current date
  const currentDate = new Date();

  // Date after 30 days
  const dateAfter30Days = add(currentDate, { days: 30 });

  // const { data: session } = useSession();
  // const dispatch = useDispatch();

  const orderData = useSelector((state: RootState) => state.orderSlice);

  // console.log("orderData slice from orderSummary:", orderData);
  // console.log("packages:", packages);

  const handlePlaceOrder = async () => {
    try {
      loaderShow();
      if (!checkTrams) {
        loaderClose();
        return toast.error("Please accept our terms and conditions");
      } else {
        if (packages?.isFree) {
          console.log("Free Order");
          const freeOrderData = {
            ...orderData,
            paymentTerms: "Free",
            paymentStatus: "Paid",
            status: "Complete",
          };
          // console.log("free:", { freeOrderData, orderData });
          //@ts-ignore
          const createOrder = await SaveOrderIntoDB(freeOrderData);

          if (createOrder) {
            // console.log("saved order:", createOrder);
            const client = await getClientServicesList(orderData?.aamardokanId);
            console.log("client for services list:", client);
            const { services } = client;

            const marched = services.find(
              (service: any) => service.serviceId === freeOrderData.serviceId
            );
            let clientServices = services;
            if (!marched) {
              clientServices = [
                ...services,
                {
                  serviceId: freeOrderData.serviceId,
                  packageId: freeOrderData.packageId,
                  amount: freeOrderData.amount,
                  nextPayment: dateAfter30Days, // TODO:: make a date fns function for the next payment
                  status: "active",
                },
              ];
            }

            // console.log("clientServices:", clientServices);

            const updateService = await updateClientServiceListIntoBD(
              clientServices,
              client?.id as string
            );

            if (updateService) {
              router.push("/client/payment/success");
              dispatch(resetCart());
            }
          }
        } else {
          console.log("Paid Order");
          //CREATE ORDER AND SENT ORDER ID TO PAYMENT PAGE
          const paidOrderData = {
            ...orderData,
            paymentTerms: "Monthly",
            paymentStatus: "Unpaid",
            status: "Ordered",
          };
          console.log("PAID:", paidOrderData);
          //@ts-ignore
          const createOrder = await SaveOrderIntoDB(paidOrderData);

          if (createOrder) {
            console.log("saved order:", createOrder);
            dispatch(setOrderId(createOrder.orderId));
            console.log("Order Id Added to Slice", createOrder.orderId);

            const client = await getClientServicesList(orderData?.aamardokanId);
            console.log("client for services list:", client);
            const { services } = client;

            const marched = services.find(
              (service: any) => service.serviceId === paidOrderData.serviceId
            );
            let clientServices = services;
            if (!marched) {
              clientServices = [
                ...services,
                {
                  serviceId: paidOrderData.serviceId,
                  packageId: paidOrderData.packageId,
                  amount: paidOrderData.amount,
                  nextPayment: dateAfter30Days, // TODO:: make a date fns function for the next payment
                  status: "inactive",
                },
              ];
            }

            // console.log("clientServices:", clientServices);

            const updateService = await updateClientServiceListIntoBD(
              clientServices,
              client?.id as string
            );

            if (updateService) {
              console.log("Client Service Updated", updateService);
              router.push("/client/payment");
              loaderClose();
              // router.push("/client/payment/success");
              // dispatch(resetCart());
            }
          }
        }
      }
    } catch (error) {
      loaderClose();
      console.error("Error to place order:", error);
    }
  };

  return (
    <Card className="space-y-4 shadow-none max-w-md lg:max-w-lg">
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
                {/* <span className="line-through opacity-80"> */}
                {packages.price.monthly}
                {/* </span>{" "} */}
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
          {packages.isFree ? "Start for Free" : "Place Order"}
        </Button>
      </CardContent>
      <Loader isOpen={loader} onClose={loaderClose} title="Please Wait" />
    </Card>
  );
};

export default OrderSummary;
