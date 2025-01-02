import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slice/orderSlice";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  orderSlice: orderReducer,
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
