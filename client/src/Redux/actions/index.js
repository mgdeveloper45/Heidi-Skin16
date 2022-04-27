import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./types";

import { getProducts, getPrices } from "../../utils/stripe-routes.js";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
  payload: {
    loading: true,
  },
});

export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: {
    loading: false,
    productDataList: [],
    error,
  },
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {
    loading: false,
    productDataList: data,
    error: "",
  },
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
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

      dispatch(fetchProductSuccess(arrayData));
    } catch (error) {
      dispatch(fetchProductFailure(error));
    }
  };
};
