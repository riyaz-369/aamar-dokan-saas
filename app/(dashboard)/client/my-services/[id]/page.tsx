import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SingleServiceProduct = () => {
  return (
    <div>
      <Card className="mx-auto shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-4">
          <Image
            className="rounded-lg w-auto h-1/2"
            src="/camera.jpg"
            alt="Camera"
            height={300}
            width={400}
          />
          <CardTitle className="text-xl font-bold mt-4">
            Camera Services
          </CardTitle>
          <CardDescription className="">TECH</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <p className="">
            Capture your moments with high-quality cameras and professional
            editing services. Perfect for events, portraits, and more.
          </p>
        </CardContent>
        <CardFooter className="p-4 border-t flex justify-between items-center">
          <span className="text-sm">Starting at $99</span>
          <Button className={cn("h-8")}>Purchase</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleServiceProduct;
