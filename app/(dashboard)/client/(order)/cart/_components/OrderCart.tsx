import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";
import { PackageType } from "../page";

type OrderCartProps = {
  packages: PackageType;
};

const OrderCart: React.FC<OrderCartProps> = ({ packages }) => {
  return (
    <div className="p-6 rounded-lg border border-dotted shadow">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-1/4 ">
          <div className="w-full">
            <AspectRatio ratio={1 / 1}>
              <Image
                className="rounded-lg shadow-md object-cover"
                src={packages?.service?.photo}
                alt={packages?.service?.slug}
                priority
                width={250}
                height={250}
              />
            </AspectRatio>
          </div>
        </div>
        <div className="flex-1 w-2/3">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 mb-4">
            {packages?.service?.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 text-md leading-relaxed">
            {packages?.service?.description}
          </p>
        </div>
      </div>
      <div className=" border-t px-4 pt-4 pb-0 flex justify-between">
        <p className="text-sm font-semibold flex flex-col">
          <span className="text-gray-400 dark:text-gray-100">
            Package Name:
          </span>{" "}
          <span className="text-primary text-lg pt-1  font-bold">
            {packages?.title}
          </span>
        </p>
        <p className="text-sm font-semibold flex flex-col">
          <span className="text-gray-400 dark:text-gray-100">Price:</span>{" "}
          <span className=" text-lg pt-1 text-slate-600 font-bold">
            {packages?.price?.monthly} / Month
          </span>
        </p>
        <p className="text-sm font-semibold flex flex-col">
          <span className="text-gray-400 dark:text-gray-100">Duration:</span>{" "}
          <span className=" text-lg pt-1 text-slate-600 font-bold">
            1 Month
          </span>
        </p>
        <p className="text-sm font-semibold flex flex-col">
          <span className="text-gray-400 dark:text-gray-100">
            Next Billing:
          </span>{" "}
          <span className=" text-lg pt-1 text-slate-600 font-bold">
            On Next Month
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderCart;
