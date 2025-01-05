"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
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
import Link from "next/link";
import { GetPackageById, SavePackageIntoDB, UpdatePackageStatus } from "../_actions";
import { toast } from "sonner";

export type TService = {
  id: string;
  photo: string;
  title: string;
  description: string;
  category: string;
  status: string;
  slug: string;
};

const handleUpdateStatus = async (service: TService) => {
  await UpdatePackageStatus(
    service.id,
    service.status === "Active" ? "Inactive" : "Active",
  );
};


const handleDuplicate = async ( id : { id: string }) => {
  // console.log("Duplicate: ", id);
  const pkg = await GetPackageById(id);

  console.log("Package: ", pkg);
  const data = {
    title: `${pkg?.title}-copy`,
    subtitle: pkg?.subtitle,
    code: `${pkg?.code}-copy`,
    features: pkg?.features,
    price: pkg?.price,
    serviceId: pkg?.serviceId,
    status: pkg?.status,
    custom: pkg?.custom,
}

console.log("Data: ", data);
 const createdPackage = await SavePackageIntoDB(data, "");
  if (createdPackage) {
    toast.success(`Package ${pkg?.code} duplicated successfully`);
  }
}

export const columns: ColumnDef<TService>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "service.title",
    header: "Service",
  },
  {
    accessorKey: "subtitle",
    header: "Subtitle",
  },
  {
    accessorKey: "price.monthly",
    header: "Price",
    cell: ({ row }) => {
      const price = row.original.price;
      return (
        <span className="text-center">
          {price.monthly <= 0 ? " - " : price.monthly}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const packages = row.original;

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
              // onClick={() => navigator.clipboard.writeText(packages.id)}
              onClick={() => handleDuplicate(packages.id)}
            >
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={`/admin/packages/${packages.id}`}>
              <DropdownMenuItem className="cursor-pointer">
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => handleUpdateStatus(packages)}
            >
              {packages.status === "Active" ? "Inactive" : "Active"}
            </DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
