"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Clipboard, MoreHorizontal } from "lucide-react";
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
// import Image from "next/image";

export type OrdersTypes = {
  orderId: string;
  status: string;
  createdAt: Date;
  service: {
    title: string;
    photo: string;
  };
};

export const columns: ColumnDef<OrdersTypes>[] = [
  // {
  //   accessorKey: "service.photo",
  //   header: "Photo",
  //   cell: ({ row }) => {
  //     return (
  //       <Image
  //         src={row.original.photo}
  //         alt={row.original.slug}
  //         width={100}
  //         height={100}
  //         className="rounded"
  //       />
  //     );
  //   },
  // },
  {
    accessorKey: "service.title",
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

      console.log(orders);

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
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
