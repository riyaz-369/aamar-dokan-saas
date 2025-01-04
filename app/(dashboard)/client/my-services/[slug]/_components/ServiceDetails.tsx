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
import { Button } from "@/components/ui/button";
import { Bell, Copy, Globe, KeyRoundIcon, User2 } from "lucide-react";
import StoreSetupDialog from "./StoreSetupDialog";
import Link from "next/link";
import { toast } from "sonner";

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
  // console.log(service);
  return (
    <Card className="">
      <CardContent className="p-4 flex flex-col justify-between items-center md:flex-row gap-6">
        <div className="flex flex-1 justify-start items-center gap-6">
          <Image
            className="rounded-lg"
            src={service.photo}
            alt="Camera"
            height={200}
            width={300}
          />
          <div className={`${isMyServiceExist && "border-r pr-4"}`}>
            <CardTitle className="text-xl font-bold mt-4">
              {service.title}
            </CardTitle>
            <CardDescription className="my-3">
              {service.category.name || "N/A"}
            </CardDescription>
            <Separator />
            <p className="mt-4">{service.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {
            service?.status === "ComingSoon" && (
              <div className="flex items-center gap-2 border rounded-md border-primary px-6 py-4 hover:cursor-pointer">
                <Bell className="h-6 w-6 text-primary" />
                <p className="text-sm">Coming Soon</p>
              </div>
            )
          }
          {isMyServiceExist && (
            <div className="px-6">
              {checkStoreSetup ? (
                <div>
                  <div className="w-full flex justify-center">
                    <Button size="sm">Update Package</Button>
                  </div>
                  <div className="border-t py-3 mt-3 flex flex-col gap-2">
                    <div className="">
                      <Link
                        target="_blank"
                        className="flex items-center justify-center gap-2 hover:underline hover:text-primary text-sm"
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
