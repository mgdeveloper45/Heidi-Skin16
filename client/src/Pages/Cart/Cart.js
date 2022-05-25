import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Break, CartPage, Title } from "./CartStyles";
import CartItem from "./CartItem.js";
import { emptyCart } from "../../Redux/cartSlicer.js";
import axios from "axios";
import { Link } from "react-router-dom";

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
      {cart.cartItems.length === 0 ? (
        <>
          <div>cart is empty...</div>
          <Link to="/products">
            <button>Return to products</button>
          </Link>
        </>
      ) : (
        <>
          <div>
            {cart.cartItems.map((item, index) => (
              <CartItem item={item} index={index} />
            ))}
          </div>
          <Break></Break>
          <div>{cart.cartTotalQuantity}</div>
          <div>{cart.cartTotalAmount}</div>
          <button onClick={() => dispatch(emptyCart())}>empty cart</button>
          <button onClick={onClick}>Checkout</button>
          <Link to="/products">
            <button>Return to products</button>
          </Link>
        </>
      )}
    </CartPage>
  );
};

export default Cart;
