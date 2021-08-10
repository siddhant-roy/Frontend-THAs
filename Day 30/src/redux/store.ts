import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/ProductSlice";
import productSlice from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: CartSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
