/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import React, { useEffect, useState } from "react";
import { GetAllPackageFromDB } from "../_action";

type Service = {
  photo: string;
  slug: string;
  title: string;
  description: string;
};

export type PackageType = {
  service: Service;
  id: string;
  title: string;
  subtitle: string | null;
  price: {
    monthly: number;
    yearly?: number;
  };
  color: string;
  isFree: boolean;
  custom: boolean;
  features: {
    title: string;
    value: string;
    isPhone: boolean;
    isDesktop: boolean;
  }[];
};

const UpdatePackageDialog = () => {
  const [packages, setPackages] = useState<PackageType[]>([]);

  const getPackage = async () => {
    const res = await GetAllPackageFromDB();
    if (res) {
      //@ts-ignore
      setPackages(res);
    }
  };

  useEffect(() => {
    getPackage();
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm">Update Package</Button>
      </DialogTrigger>
      <DialogContent
        className={cn("min-w-[90%] max-w-[95%] md:min-w-[70%] lg:max-w-[60%]")}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl">
            Upgrade Your Package
          </DialogTitle>
          <DialogDescription className="text-center text-sm md:text-base">
            Choose the best package for your business to unlock additional
            features and grow efficiently.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="border rounded-lg shadow-md text-center bg-gray-50 dark:bg-gray-900"
              >
                <div
                  className={cn("py-4 rounded-t-lg")}
                  style={{ backgroundColor: pkg.color }}
                >
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-50">
                    {pkg.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-50">
                    {pkg.isFree
                      ? "Free"
                      : `৳ ${pkg.custom ? "Contact" : pkg.price.monthly} ${
                          !pkg.custom ? "/ month" : ""
                        }`}
                  </p>
                  {/* <Button
                    className={cn(
                      "mt-4 bg-transparent border hover:bg-primary hover:border-primary transition-all duration-300 text-sm md:text-base"
                    )}
                  >
                    {pkg.title === "Custom" || pkg.custom
                      ? "Contact"
                      : `Select ${pkg.title}`}
                  </Button> */}
                </div>
                <ScrollArea className="h-[60vh]">
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-200 px-4 pt-0">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm md:text-base">
                          {feature.value === "Yes" || feature.value !== "No"
                            ? "✔"
                            : "✘"}
                        </span>
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium text-sm md:text-base">
                            {feature.title}
                          </span>
                          {feature.value && (
                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {feature.value}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
                <div className="p-4 pt-0">
                  <Button
                    className="mt-6 w-full text-sm md:text-base"
                    style={{ backgroundColor: pkg.color }}
                  >
                    {pkg.title === "Custom" || pkg.custom
                      ? "Contact"
                      : `Select ${pkg.title}`}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePackageDialog;
