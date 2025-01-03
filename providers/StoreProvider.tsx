"use client";

import store from "@/app/_redux-store/store";
import { Provider } from "react-redux";
import {persistStore} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'



const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const persistor = persistStore(store)

  return <Provider store={store}>
          <PersistGate persistor={persistor}>
            {children}
          </PersistGate>
      </Provider>;
};

export default StoreProvider;
