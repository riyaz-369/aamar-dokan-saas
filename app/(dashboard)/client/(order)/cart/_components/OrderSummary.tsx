"use client";

import React from "react";
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

const OrderSummary = () => {
  return (
    <Card className="space-y-4 shadow-none max-w-lg">
      <CardHeader>
        <CardTitle>Your order</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Product</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Product Name x <b>4</b>
              </TableCell>
              <TableCell className="text-right">900 BDT.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Subtotal</TableCell>
              <TableCell className="text-right">
                <b>990 BDT.</b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Total</TableCell>
              <TableCell className="text-right">
                <b>900 BDT.</b>
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
            <span className="hover:underline">
              <b>Privacy policy.</b>
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and agree to the terms and conditions.
          </label>
        </div>
        <Link href="/client/payment">
          <Button type="submit" className="w-full mt-4">
            Place order
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
