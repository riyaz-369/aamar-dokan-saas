"use client";

import OrderSummary from "./_components/OrderSummary";
import OrderCart from "./_components/OrderCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetPackageFromDB } from "./_actions";
import { RootState } from "@/app/_redux-store/store";

const OrderCartPage = () => {
  const [packages, setPackages] = useState({});
  const packs = useSelector((state: RootState) => state.cartSlice);

  const getPackage = async () => {
    const res = await GetPackageFromDB(packs.packageCode);
    setPackages(res);
  };

  useEffect(() => {
    getPackage();
  }, []);

  console.log(packages);

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
