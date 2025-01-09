import Image from "next/image";
import React from "react";
import { PackageType } from "../page";

type OrderCartProps = {
  packages: PackageType;
};

const OrderCart: React.FC<OrderCartProps> = ({ packages }) => {
  return (
    <div className="p-6 rounded-lg border border-dotted shadow-md bg-white dark:bg-gray-950">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          <Image
            className="rounded-lg shadow-md object-cover w-full h-auto"
            src={packages?.service?.photo}
            alt={packages?.service?.slug}
            priority
            width={250}
            height={250}
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100 mb-2 md:mb-4">
            {packages?.service?.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            {packages?.service?.description}
          </p>
        </div>
      </div>

      <div className="border-t mt-6 pt-4 flex flex-wrap justify-between gap-4">
        <div className="w-1/2 md:w-auto">
          <p className="text-sm font-semibold">
            <span className="text-gray-400 dark:text-gray-300">
              Package Name:
            </span>
            <span className="text-primary text-base md:text-lg font-bold block">
              {packages?.title}
            </span>
          </p>
        </div>

        <div className="w-1/2 md:w-auto">
          <p className="text-sm font-semibold">
            <span className="text-gray-400 dark:text-gray-300">Price:</span>
            <span className="text-slate-600 text-base md:text-lg font-bold block">
              {packages?.price?.monthly} / Month
            </span>
          </p>
        </div>

        <div className="w-1/2 md:w-auto">
          <p className="text-sm font-semibold">
            <span className="text-gray-400 dark:text-gray-300">Duration:</span>
            <span className="text-slate-600 text-base md:text-lg font-bold block">
              1 Month
            </span>
          </p>
        </div>

        <div className="w-1/2 md:w-auto">
          <p className="text-sm font-semibold">
            <span className="text-gray-400 dark:text-gray-300">
              Next Billing:
            </span>
            <span className="text-slate-600 text-base md:text-lg font-bold block">
              On Next Month
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
