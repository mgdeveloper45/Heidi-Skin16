import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../Redux/cartSlicer.js";
import { ArrowContainer, Arrows, Input } from "../Products/SingleProduct.js";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const styled = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
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
      <div>
        <img style={{ width: "200px" }} src={item.data.images} alt="..." />
      </div>
      <div>
        <h2>{item.data.name}</h2>
        <div style={styled.flexRow}>
          <h3>{item.data.metadata.price}</h3>
          <ArrowContainer>
            <Input
              type="number"
              value={num}
              onChange={() => dispatch(updateCart(num))}
            />
            <Arrows>
              <TiArrowSortedUp onClick={incNum} />
              <TiArrowSortedDown onClick={decNum} />
            </Arrows>
          </ArrowContainer>
        </div>
        <h3>{item.data.metadata.size}</h3>
        <h3>[{item.data.metadata.skinType}]</h3>
        <button onClick={() => dispatch(removeFromCart(item))}>
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
