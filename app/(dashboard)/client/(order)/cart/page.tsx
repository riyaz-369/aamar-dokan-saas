/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import OrderSummary from "./_components/OrderSummary";
import OrderCart from "./_components/OrderCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_redux-store/store";
import { GetAPackageFromDB } from "./_actions";
import { CircleAlert } from "lucide-react";
import Link from "next/link";

type Service = {
  photo: string;
  slug: string;
  title: string;
  description: string;
};

export type PackageType = {
  service: Service;
  id: string;
  title: string;
  price: {
    monthly: number;
  };
};

const OrderCartPage = () => {
  const [packages, setPackages] = useState<PackageType | null>(null);
  const packs = useSelector((state: RootState) => state.orderSlice);

  console.log("packs", packs);

  const getPackage = async () => {
    const res = await GetAPackageFromDB(packs?.packageId);
    //@ts-ignore
    setPackages(res);
  };

  useEffect(() => {
    getPackage();
  }, []);

  return (
    <div className="flex justify-between gap-4">
      {
        packs.serviceId ? 
      <>
      <div className="flex-1">
        {packages && <OrderCart packages={packages} />}
      </div>
      {packages && <OrderSummary packages={packages} />}
      </>
        :
        <div className="flex-1 flex-col flex items-center justify-center h-screen gap-4">
          <CircleAlert className="h-10 w-10 text-primary" />
          <h1>Please select a   
            <Link href="/price" className="text-primary cursor-pointer"> package</Link>
          </h1>
        </div>
      }
    </div>
  );
};

export default OrderCartPage;
