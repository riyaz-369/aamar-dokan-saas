"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Clipboard, File, MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type BillingTypes = {
  id: string;
  amount: number;
  transactionId: string;
  order: {
    orderId: string;
    service: {
      id: string;
      title: string;
    };
  };
  paymentId: string;
  method: string;
  currency: string;
  status: string;
  paymentExecuteTime: string | null;
  transactionStatus: string;
  statusMessage: string;
};

export const columns: ColumnDef<BillingTypes>[] = [
  {
    accessorKey: "order.service.title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Service
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "transactionId",
    header: "Transaction ID",
  },
  {
    accessorKey: "order.orderId",
    header: "Order ID",
  },
  {
    accessorKey: "payerAccount",
    header: "Account (Phone)",
  },

  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "statusMessage",
    header: "Status",
  },
  {
    accessorKey: "paymentExecuteTime",
    header: "Payment Time",
    cell: ({ row }) => {
      const paymentExecuteTime = row?.original?.paymentExecuteTime;
      if (!paymentExecuteTime) return "";
      const cleanedDate = paymentExecuteTime
        .replace(/:(\d{3})/, ".$1")
        .replace(" GMT", "");
      const date = new Date(cleanedDate);
      const formattedDateTime = isNaN(date.getTime())
        ? "Invalid Date"
        : date.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

      return <p>{formattedDateTime}</p>;
    },
  },
  // {
  //   accessorKey: "transactionStatus",
  //   header: "Transaction Status",
  // },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      // console.log(payment);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(payment.transactionId)
              }
            >
              <Clipboard /> Transaction ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <File className="h-4 w-4" />
              View Details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
