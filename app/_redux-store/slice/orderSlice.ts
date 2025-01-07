import { createSlice } from "@reduxjs/toolkit";
import type { Orders } from "@prisma/client";

type OrderType = Orders;
const initialState: OrderType = {
  aamardokanId: "",
  orderId: "",
  clientId: "",
  serviceId: "",
  packageId: "",
  amount: 0,
  paymentTerms: "Monthly",
  status: "Ordered",
  paymentStatus: "Unpaid",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        aamardokanId: action.payload.aamardokanId,
        clientId: action.payload.clientId,
        serviceId: action.payload.serviceId,
        packageId: action.payload.packageId,
        amount: action.payload.amount,
      };
    },
    setClientInfo: (state, action) => {
      return {
        ...state,
        aamardokanId: action.payload.aamardokanId,
        clientId: action.payload.clientId,
      };
    },
    setOrderInfo: (state, action) => {
      return {
        ...state,
        aamardokanId: action.payload.aamardokanId,
        clientId: action.payload.clientId,
        amount: action.payload.amount,
        paymentTerms: action.payload.paymentTerms,
        paymentStatus: action.payload.paymentStatus,
        status: action.payload.status,
      };
    },
    setOrderId: (state, action) => {
      return {
        ...state,
        orderId: action.payload,
      };
    },
    resetCart: (state) => {
      return initialState;
    },
  },
});

export const { addToCart, setOrderInfo, resetCart, setClientInfo,setOrderId } = orderSlice.actions;
export default orderSlice.reducer;
