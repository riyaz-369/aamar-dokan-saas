import { AspectRatio } from "@/components/ui/aspect-ratio";
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

const ServiceCard = ({ servicesProduct }: { servicesProduct: number }) => {
  return (
    <Card className="max-w-[300px] mx-auto shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/client/my-services/${servicesProduct + 1}`}>
        <CardHeader className="p-4">
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <Image
                className="rounded-lg object-cover"
                src="/camera.jpg"
                alt="Camera"
                height={300}
                width={400}
              />
            </AspectRatio>
          </div>
          <CardTitle className="text-xl font-bold mt-4">
            Camera Services
          </CardTitle>
          <CardDescription className="">TECH</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm">
            Capture your moments with high-quality cameras and professional
            editing services. Perfect for events, portraits, and more.
          </p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 border-t flex justify-between items-center">
        <span className="text-sm">Starting at $99</span>
        <Button className={cn("h-8")}>Purchase</Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
