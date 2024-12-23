import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type ServiceDetailsProps = {
  service: {
    id: string;
    name: string;
    description: string;
    photo: string;
    category: {
      name: string;
    };
  };
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  return (
    <Card className="">
      <CardContent className="p-4 flex flex-col md:flex-row gap-6">
        <Image
          className="rounded-lg"
          src={service.photo}
          alt="Camera"
          height={200}
          width={300}
        />
        <div>
          <CardTitle className="text-xl font-bold mt-4">
            {service.name}
          </CardTitle>
          <CardDescription className="my-3">
            {service.category.name || "N/A"}
          </CardDescription>
          <Separator />
          <p className="mt-4">{service.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetails;
