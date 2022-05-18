import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Break,
  CartPage,
  Title,
  ImgContainer,
  CartImg,
  ProductDetails,
} from "./CartStyles";
import { emptyCart, removeFromCart } from "../../Redux/cartSlicer.js";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    axios
      .post("/create-checkout-session", {
        lineItems: cart.cartItems.map((item) => {
          return {
            price: item.price.priceId,
            quantity: item.quantity,
          };
        }),
      })
      .then((res) => {
        console.log(res.data);
        window.location = res.data;
      });
  };

  return (
    <CartPage>
      <Title>Your Cart</Title>
      <div>
        {cart.cartItems.map((item, index) => (
          <div key={index} item={item}>
            <ImgContainer>
              <CartImg />
            </ImgContainer>
            <ProductDetails>
              <h2>{item.data.name}</h2>
              <h3>{item.data.metadata.price}</h3>
              <h3>{item.data.metadata.size}</h3>
              <h3>{item.data.description}</h3>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove Item
              </button>
            </ProductDetails>
          </div>
        ))}
      </div>
      <Break></Break>
      <div>{cart.cartTotalQuantity}</div>
      <div>{cart.cartTotalAmount}</div>
      <button onClick={() => dispatch(emptyCart())}>empty cart</button>
      <button onClick={onClick}>Checkout</button>
    </CartPage>
  );
};

export default Cart;
