import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceId: "",
  packageCode: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.serviceId = action.payload.serviceId;
      state.packageCode = action.payload.packageCode;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
