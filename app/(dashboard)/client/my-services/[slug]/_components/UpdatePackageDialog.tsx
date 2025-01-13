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
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { UserType } from "@/types/interface";
import { addToCart } from "@/app/_redux-store/slice/orderSlice";
import Loader from "@/components/Loader";

export type PackageType = {
  serviceId: string;
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
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const user = session?.user as UserType;

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

  const handleSelectPackage = async (pkg: PackageType) => {
    console.log("Package selected: ", pkg);
    try {
      if (pkg.custom) {
        return window.open("https://techsoulbd.com/contact", "_blank");
      }
      loaderShow();
      if (user) {
        dispatch(
          addToCart({
            packageId: pkg.id,
            serviceId: pkg.serviceId,
            amount: pkg.price.monthly,
            aamardokanId: user.aamardokanId,
            clientId: user.id,
          })
        );
        setTimeout(() => {
          loaderClose();
          router.push(`/client/cart`);
        }, 1000);
      } else {
        loaderClose();
        router.push("/auth/sign-in");
      }
    } catch (error) {
      loaderClose();
      console.error("Error: ", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm">Upgrade Package</Button>
      </DialogTrigger>
      <DialogContent className={cn("min-w-[70%] pr-0")}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-6">
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
                </div>
                <ScrollArea className="h-[55vh]">
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-100 px-4 pt-0">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-light">
                          {feature.value === "Yes" || feature.value !== "No"
                            ? "✔"
                            : "✘"}
                        </span>
                        <div className="flex items-center justify-between w-full">
                          <span className="font-light text-sm">
                            {feature.title}
                          </span>
                          {feature.value && (
                            <span className="text-xs font-light md:text-sm">
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
                    onClick={() => handleSelectPackage(pkg)}
                    className="mt-6 w-full text-sm md:text-base text-gray-50"
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
      <Loader isOpen={loader} onClose={loaderClose} title="Please Wait" />
    </Dialog>
  );
};

export default UpdatePackageDialog;
