"use client";

import OrderSummary from "./_components/OrderSummary";
import OrderCart from "./_components/OrderCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_redux-store/store";
import { GetAPackageFromDB } from "./_actions";

const OrderCartPage = () => {
  const [packages, setPackages] = useState({});
  const packs = useSelector((state: RootState) => state.orderSlice);

  // console.log(packs);

  const getPackage = async () => {
    const res = await GetAPackageFromDB(packs.packageId);
    setPackages(res);
  };

  useEffect(() => {
    getPackage();
  }, []);

  // console.log(packages);

  return (
    <div className="flex justify-between gap-4">
      <div className="flex-1">
        <OrderCart packages={packages} />
      </div>
      <OrderSummary packages={packages} />
    </div>
  );
};

export default OrderCartPage;
