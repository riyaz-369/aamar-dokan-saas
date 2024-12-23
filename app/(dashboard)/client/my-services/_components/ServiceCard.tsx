"use client";

// import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceCardPropsType = {
  service: {
    id: string;
    title: string;
    description: string;
    slug: string;
    photo: string;
    meta: {
      metaTitle: string;
      metaDescription: string;
    };
    category: {
      name: string;
      id: string;
    };
  };
};

const ServiceCard: React.FC<ServiceCardPropsType> = ({ service }) => {
  return (
    <Card className="max-w-[300px] mx-auto shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/client/my-services/${service.id}`}>
        <CardHeader className="p-4">
          <div className="w-full">
            {/* <AspectRatio ratio={16 / 9}> */}
            <Image
              className="rounded-lg object-cover"
              src={service.photo}
              alt={service.slug}
              height={300}
              width={400}
            />
            {/* </AspectRatio> */}
          </div>
          <CardTitle className="text-xl font-bold mt-4">
            {service.title}
          </CardTitle>
          <CardDescription className="">
            Category: <span>{service.category.name || "N/A"}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm">{service.description}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 border-t flex justify-between items-center">
        <Button className={cn("h-8 w-full")}>View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
