import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  serviceId: string;
  packageCode: string;
}

const initialState: CartState = {
  serviceId: "",
  packageCode: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Reducer action payload:", action.payload);
      state.serviceId = action.payload.serviceId;
      state.packageCode = action.payload.packageCode;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
