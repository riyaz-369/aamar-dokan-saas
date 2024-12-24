import { createSlice } from "@reduxjs/toolkit";

interface OrderState {
  serviceId: string;
  packageCode: string;
}

const initialState: OrderState = {
  serviceId: "",
  packageCode: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.serviceId = action.payload.serviceId;
      state.packageCode = action.payload.packageCode;
    },
  },
});

export const { addToCart } = orderSlice.actions;
export default orderSlice.reducer;
