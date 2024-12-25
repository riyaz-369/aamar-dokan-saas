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
      console.log(action.payload);
      return {
        ...state,
        serviceId: action.payload.serviceId,
        packageId: action.payload.packageId,
        amount: action.payload.amount,
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
