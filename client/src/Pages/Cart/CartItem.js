import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../Redux/cartSlicer.js";
import { ArrowContainer, Arrows, Input } from "../Products/SingleProduct.js";
import { Break, CartPage, Title, CartButton } from "./CartStyles";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const styled = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "700px",
    maxHeight: "500px",
    marginBottom: "20px",
  },
  imgItem: {
    border: "1px solid #E2B4BD",
    borderRadius: "5px",
    minWidth: "250px",
    maxWidth: "250px",
    minHeight: "250px",
    maxHeight: "250px",
  },
  paddingBottom: {
    paddingBottom: "10px",
  },
};

const CartItem = ({ index, item }) => {
  const dispatch = useDispatch();

  const [num, setNum] = React.useState(item.quantity);
  let incNum = () => {
    setNum(num + 1);
  };

  let decNum = () => {
    if (num === 0) {
      return;
    } else if (num >= 1) {
      setNum(num - 1);
    }
  };

  // let zeroHandler = () => {
  //   if ( num === 0) {

  //   }
  // }

  // let handleChange = async (e) => {
  //   setNum(parseInt(e.target.value));
  //   dispatch(updateCart(index, num));
  // };

  return (
    <div style={styled.flexRow} key={index} item={item}>
      <img style={styled.imgItem} src={item.data.images} alt="..." />
      <div
        className="cart-item-details"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          // borderRight: "1px solid pink",
        }}
      >
        <h3>{item.data.name}</h3>
        <div style={styled.flexRow}>
          <h3>${item.data.metadata.price}</h3>
          <ArrowContainer>
            <Input
              type="string"
              value={num}
              onChange={() => dispatch(updateCart(num))}
            />
            <Arrows>
              <TiArrowSortedUp onClick={incNum} />
              <TiArrowSortedDown onClick={decNum} />
            </Arrows>
          </ArrowContainer>
        </div>
        <p style={styled.paddingBottom}>{item.data.metadata.size}</p>
        <p style={styled.paddingBottom}>[{item.data.metadata.skinType}]</p>
        <CartButton onClick={() => dispatch(removeFromCart(item))}>
          Remove Item
        </CartButton>
      </div>
    </div>
  );
};

export default CartItem;
