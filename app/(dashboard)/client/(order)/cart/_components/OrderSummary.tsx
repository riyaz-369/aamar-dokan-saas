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
import { useDispatch } from "react-redux";
import { setOrderInfo } from "@/app/_redux-store/slice/orderSlice";
import { useSession } from "next-auth/react";
import { PackageType } from "../page";

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

  const user = session?.user as { id: string; aamardokanId: string } | null;

  const handlePlaceOrder = () => {
    loaderShow();
    if (user) {
      dispatch(
        setOrderInfo({ aamardokanId: user.aamardokanId, clientId: user.id })
      );
    }

    if (!checkTrams) {
      toast.error("Please check our terms and conditions");
      loaderClose();
    } else {
      loaderClose();
      router.push("/client/payment");
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
                {packages.price.monthly} BDT
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
          Place order
        </Button>
      </CardContent>
      <Loader isOpen={loader} onClose={loaderClose} title="Please Wait" />
    </Card>
  );
};

export default OrderSummary;
