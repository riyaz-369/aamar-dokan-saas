/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import OrderSummary from "./_components/OrderSummary";
import OrderCart from "./_components/OrderCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_redux-store/store";
import { GetAPackageFromDB } from "./_actions";

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

  const getPackage = async () => {
    const res = await GetAPackageFromDB(packs.packageId);
    //@ts-ignore
    setPackages(res);
  };

  useEffect(() => {
    getPackage();
  }, []);

  return (
    <div className="flex justify-between gap-4">
      <div className="flex-1">
        {packages && <OrderCart packages={packages} />}
      </div>
      {packages && <OrderSummary packages={packages} />}
    </div>
  );
};

export default OrderCartPage;
