import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).cartItems
    : [],
  cartTotalQuantity: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).cartTotalQuantity
    : 0,
  cartTotalAmount: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).cartTotalAmount
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.data.id === action.payload.data.id
      );
      if (existingIndex === -1) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[existingIndex].quantity += action.payload.quantity;
      }
      state.cartTotalQuantity += action.payload.quantity;
      state.cartTotalAmount +=
        action.payload.quantity * action.payload.data.metadata.price;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.data.id === action.payload.data.id
      );
      state.cartItems.splice(existingIndex, 1);
      state.cartTotalAmount -=
        action.payload.quantity * action.payload.data.metadata.price;
      state.cartTotalQuantity -= action.payload.quantity;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    updateCartItem(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.data.id === action.payload.data.id
      );

      state.cartItems[existingIndex].quantity = action.payload.quantity;

      let cartQuantity = 0;

      state.cartItems.forEach((item) => {
        cartQuantity += item.quantity;
      });

      state.cartTotalQuantity = cartQuantity;

      let cartTotal = 0;
      state.cartItems.forEach((item) => {
        cartTotal += parseFloat(item.data.metadata.price) * item.quantity;
      });

      console.log("cart total amount ==>", cartTotal);

      state.cartTotalAmount = cartTotal;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    // updateQuantity(state, action) {
    //   const existingIndex = state.cartItems.findIndex(
    //     (item) => item.data.id === action.payload.data.id
    //   );
    //   state.cartItems[existingIndex].quantity = action.payload.quantity;
    //   state.cartTotalQuantity = action.payload.quantity;
    //   state.cartTotalAmount =
    //     action.payload.quantity * action.payload.data.metadata.price;

    //   localStorage.setItem("cart", JSON.stringify(state));
    // },
    cartTotalAmount(state, action) {
      state.cartTotalAmount = action.payload;
    },
    emptyCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  cartTotalAmount,
  updateCartItem,
  updateCartItemQuantity,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
