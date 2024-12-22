import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ServiceDetails = () => {
  return (
    <Card className="">
      <CardContent className="p-4 flex flex-col md:flex-row gap-6">
        <Image
          className="rounded-lg"
          src="/camera.jpg"
          alt="Camera"
          height={200}
          width={300}
        />
        <div>
          <CardTitle className="text-xl font-bold mt-4">
            Camera Services
          </CardTitle>
          <CardDescription className="my-3">TECH</CardDescription>
          <Separator />
          <p className="mt-4">
            Capture your moments with high-quality cameras and professional
            editing services. Perfect for events, portraits, and more.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetails;
