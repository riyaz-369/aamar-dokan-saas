import { createSlice } from "@reduxjs/toolkit";
import type { Orders } from "@prisma/client";

type OrderType = Orders;
const initialState: OrderType = {
  aamardokanId: "",
  clientId: "",
  serviceId: "",
  packageId: "",
  amount: 0,
  paymentTerms: "Monthly",
  status: "Complete",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        serviceId: action.payload.serviceId,
        packageId: action.payload.packageId,
        amount: action.payload.amount,
        // paymentTerms: action.payload.paymentTerms,
      };
    },
    setOrderInfo: (state, action) => {
      return {
        ...state,

        aamardokanId: action.payload.aamardokanId,
        clientId: action.payload.clientId,
      };
    },
  },
});

export const { addToCart, setOrderInfo } = orderSlice.actions;
export default orderSlice.reducer;
