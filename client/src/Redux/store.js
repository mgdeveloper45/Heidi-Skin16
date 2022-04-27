import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/productSlice.js";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
