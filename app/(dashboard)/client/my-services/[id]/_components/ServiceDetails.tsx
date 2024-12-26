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
import { Copy, Globe, KeyRoundIcon, User2 } from "lucide-react";
import StoreSetupDialog from "./StoreSetupDialog";

type ServiceDetailsProps = {
  service: {
    id: string;
    title: string;
    description: string;
    photo: string;
    category: {
      name: string;
    };
  };
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  service,
  isMyServiceExist,
}) => {
  return (
    <Card className="">
      <CardContent className="p-4 flex flex-col justify-center items-center md:flex-row gap-6">
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
        {isMyServiceExist && (
          <div className="px-6">
            <StoreSetupDialog />
            {/* <div>
            <Button size="sm">Update Package</Button>
            <div className="border-t py-3 mt-3 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2 hover:underline text-sm">
                <Globe className="h-4 w-4 text-blue-500" />
                <a target="_blank" href="https://pos.aamardokan.online">
                  aamardokan.online
                </a>
              </div>
              <div className="flex items-center gap-2 hover:underline">
                <User2 className="h-4 w-4" />
                <span className="flex justify-between w-full items-center text-sm">
                  <p>john-doe</p>
                  <Copy className="h-4 w-4 text-gray-400 cursor-pointer" />
                </span>
              </div>
              <div className="flex items-center gap-2 hover:underline">
                <KeyRoundIcon className="h-4 w-4" />
                <span className="flex justify-between w-full items-center text-sm">
                  <p>******</p>
                  <Copy className="h-4 w-4 text-gray-400 cursor-pointer" />
                </span>
              </div>
            </div>
          </div> */}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceDetails;
