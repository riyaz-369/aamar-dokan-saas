import React from "react";
import OrderSummary from "./_components/OrderSummary";
import OrderCart from "./_components/OrderCart";

const OrderCartPage = () => {
  return (
    <div className="flex justify-between gap-8">
      <div className="flex-1">
        <OrderCart />
      </div>
      <OrderSummary />
    </div>
  );
};

export default OrderCartPage;
