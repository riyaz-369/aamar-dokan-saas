/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Bell, Copy, Globe, KeyRoundIcon, User2 } from "lucide-react";
import StoreSetupDialog from "./StoreSetupDialog";
import Link from "next/link";
import { toast } from "sonner";
import UpdatePackageDialog from "./UpdatePackageDialog";

type ServiceDetailsProps = {
  service: {
    id: string;
    title: string;
    description: string;
    photo: string;
    loginUrl: string;
    category: {
      name: string;
    };
    status: string;
  };
  isMyServiceExist: boolean;
  checkStoreSetup: boolean;
  matchedServices: any;
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  service,
  isMyServiceExist,
  checkStoreSetup,
  matchedServices,
}) => {
  return (
    <Card className="w-full mx-auto">
      <CardContent className="p-4 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex flex-col lg:flex-row gap-6">
          <Image
            className="rounded-lg object-cover w-full sm:w-auto lg:w-[300px] h-auto"
            src={service.photo}
            alt="Service Image"
            height={200}
            width={300}
          />
          <div className={`flex-1 ${isMyServiceExist ? "border-r pr-4" : ""}`}>
            <CardTitle className="text-lg sm:text-xl font-bold mt-4 lg:mt-0">
              {service.title}
            </CardTitle>
            <CardDescription className="my-3 text-sm sm:text-base">
              {service.category.name || "N/A"}
            </CardDescription>
            <Separator />
            <p className="mt-4 text-sm sm:text-base">{service.description}</p>
          </div>
        </div>

        {/* Action Section */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          {service?.status === "ComingSoon" && (
            <div className="flex items-center gap-2 border rounded-md border-primary px-4 py-3 hover:cursor-pointer">
              <Bell className="h-6 w-6 text-primary" />
              <p className="text-sm">Coming Soon</p>
            </div>
          )}
          {isMyServiceExist && (
            <div className="px-4">
              {!checkStoreSetup ? (
                <div>
                  <div className="w-full flex justify-center">
                    <UpdatePackageDialog />
                  </div>
                  <div className="border-t py-3 mt-3 flex flex-col gap-2">
                    <div>
                      <Link
                        target="_blank"
                        className="flex items-center justify-start gap-2 hover:underline hover:text-primary text-sm"
                        href={service.loginUrl}
                      >
                        <Globe className="h-4 w-4" />
                        aamardokan.online
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <User2 className="h-4 w-4" />
                      <span className="flex justify-between w-full items-center text-sm">
                        <p>{matchedServices.username}</p>
                        <Copy
                          className="h-4 w-4 text-gray-400 cursor-pointer"
                          onClick={() => {
                            navigator.clipboard
                              .writeText(matchedServices.username)
                              .then(() => {
                                toast.success("Username Is Copied!");
                              });
                          }}
                        />
                      </span>
                    </div>
                    <div className="flex items-center gap-2 hover:underline">
                      <KeyRoundIcon className="h-4 w-4" />
                      <span className="flex justify-between w-full items-center text-sm">
                        <p>{matchedServices.password}</p>
                        <Copy
                          className="h-4 w-4 text-gray-400 cursor-pointer"
                          onClick={() => {
                            navigator.clipboard
                              .writeText(matchedServices.password)
                              .then(() => {
                                toast.success("Password Is Copied!");
                              });
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <StoreSetupDialog id={service.id} />
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetails;
