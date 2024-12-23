import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slice/orderSlice";

const store = configureStore({
  reducer: {
    orderSlice: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
