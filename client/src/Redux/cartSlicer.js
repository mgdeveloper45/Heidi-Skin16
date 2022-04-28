import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[existingIndex].quantity += action.payload.quantity;
      }
      state.cartTotalQuantity += action.payload.quantity;
      state.cartTotalAmount += action.payload.quantity * action.payload.price;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems.splice(existingIndex, 1);
      state.cartTotalQuantity -= action.payload.quantity;
      state.cartTotalAmount -= action.payload.quantity * action.payload.price;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[existingIndex].quantity = action.payload.quantity;
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      state.cartItems.forEach((item) => {
        state.cartTotalQuantity += item.quantity;
        state.cartTotalAmount += item.quantity * item.price;
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    cartTotalAmount(state, action) {
      state.cartTotalAmount = action.payload;
    },
    emptyCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCart,
  cartTotalAmount,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;