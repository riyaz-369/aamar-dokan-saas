import { configureStore } from "@reduxjs/toolkit";
import { addToCart } from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    cartSlice: addToCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
