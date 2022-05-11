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

const Cart = () => {
  const cart = useSelector((state) => state.cart);
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
            </ProductDetails>
          </div>
        ))}
      </div>
      <Break></Break>
      <div>{cart.cartTotalQuantity}</div>
      <div>{cart.cartTotalAmount}</div>
    </CartPage>
  );
};

export default Cart;
