import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPrices, getProducts } from "../utils/stripe-routes";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "posts/fetchProducts",
  async () => {
    try {
      const products = await getProducts();
      const prices = await getPrices();
      const arrayData = [];
      products.forEach((item) => {
        const foundIndex = prices.findIndex(
          (object) => object.productId === item.id
        );
        arrayData.push({ data: item, price: prices[foundIndex] });
      });
      console.log("fetchProductSlice", arrayData);
      return arrayData;
    } catch (err) {
      console.log(err);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});
//export reducers if need be
export default productSlice.reducer;
