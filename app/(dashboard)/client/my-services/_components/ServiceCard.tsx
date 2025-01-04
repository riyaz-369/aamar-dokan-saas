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
    status: string;
  };
  isExist:boolean
};

const ServiceCard: React.FC<ServiceCardPropsType> = ({ service, isExist }) => {

  console.log("isExist", service.title,isExist)

  
  return (
    <Card className="max-w-[300px] mx-auto shadow-md rounded-md  transition-all duration-300 hover:bg-primary/5">
      <Link href={`/client/my-services/${service.slug}`} className="flex flex-col h-full justify-between">
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
        <CardContent className="p-4 pt-0">
          <p className="text-sm line-clamp-2">{service.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {isExist ?  <Button variant="outline" disabled>
            Subscribed
          </Button>
          :
          <Button>
            {
              service.status === "Active" ? "View Details" : "Coming Soon"
            }
            {/* View Details */}
          </Button>
           }
          
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ServiceCard;
