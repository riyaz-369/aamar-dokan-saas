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
import Image from "next/image";
// import Image from "next/image";

export type MyOrdersTypes = {
  orderId: string;
  status: string;
  createdAt: Date;
  service: {
    title: string;
    photo: string;
  };
};

export const columns: ColumnDef<MyOrdersTypes>[] = [

  {
    accessorKey: "service.title", // Make sure this matches the structure of your data
    id: "service.title", // Ensure the column id is correctly set for filtering
    filterFn: "arrIncludes", 
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
    cell: ({ row }) => {
      const service = row.original.service;
      return (
        <div className="flex items-center gap-4">
          <Image
            className="rounded-lg"
            src={service.photo}
            alt={service.title}
            height={50}
            width={50}
          />
          <div>
            <p>{service.title}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "createdAt",
    header: "Order Date",
    cell: ({ row }) => {
      const createdAt = row?.original?.createdAt;
      const formattedDateTime = new Date(createdAt).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true,
      });
      return <p>{formattedDateTime}</p>;
    },
  },

  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    // cell: ({ row }) => {
    //   const status = row.original.status;
    //   return (
    //     <div>
    //       <p>{status}</p>
    //     </div>
    //   );
    // },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const orders = row.original;

      // console.log(orders);

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
              className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(orders.orderId)}
            >
              <Clipboard /> Order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
            className="cursor-pointer">
              <File className="h-6 w-6"/>
              View details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
