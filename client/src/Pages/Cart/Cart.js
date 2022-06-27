import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Break, CartPage, Title, CartButton, styledObj } from "./CartStyles";
import CartItem from "./CartItem.js";
// import { emptyCart } from "../../Redux/cartSlicer.js";
import axios from "axios";
import { Link } from "react-router-dom";
// import emptyCartPng from "../../images/emptyCart.png";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  // toFixed() cart

  const dispatch = useDispatch();

  const onClick = e => {
    e.preventDefault();
    axios
      .post("/create-checkout-session", {
        lineItems: cart.cartItems.map(item => {
          return {
            price: item.price.priceId,
            quantity: item.quantity,
          };
        }),
      })
      .then(res => {
        console.log(res.data);
        window.location = res.data;
      });
  };

  return (
    <CartPage>
      <Title>Your Cart</Title>
      {cart.cartItems.length === 0 ? (
        <div
          style={{
            minHeight: "600px",
            margin: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <h2>Your cart is empty...</h2>
          <Link to="/products">
            <CartButton>RETURN TO PRODUCTS</CartButton>
          </Link>
        </div>
      ) : (
        <>
          <div
            style={{
              margin: "40px 0px",
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              {cart.cartItems.map((item, index) => (
                <CartItem item={item} index={index} />
              ))}
            </div>
            <div
              className="cart-total-checkout-container"
              style={styledObj.cartTotalCheckoutContainer}
            >
              <div style={{ textAlign: "center" }}>
                Total: ${cart.cartTotalAmount.toFixed(2)}
              </div>
              <CartButton onClick={onClick}>CHECKOUT</CartButton>
              <Link to="/products">
                <CartButton>CONTINUE SHOPPING</CartButton>
              </Link>
            </div>
          </div>
        </>
      )}
    </CartPage>
  );
};

export default Cart;
