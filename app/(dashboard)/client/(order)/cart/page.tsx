import React from "react";
import OrderSummary from "./_components/OrderSummary";
import OrderCart from "./_components/OrderCart";

const OrderCartPage = () => {
  return (
    <div className="flex justify-between">
      <OrderCart />
      <OrderSummary />
    </div>
  );
};

export default OrderCartPage;
