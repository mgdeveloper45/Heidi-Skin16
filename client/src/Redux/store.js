import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/productSlice.js";
import cartSlicer from "../Redux/cartSlicer.js";

export const store = configureStore({
  reducer: {
    productData: productSlice,
    cart: cartSlicer,
  },
});
