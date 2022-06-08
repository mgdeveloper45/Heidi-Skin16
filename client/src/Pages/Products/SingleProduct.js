import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlicer.js";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

//stylesheet
import {
  ProductCard,
  ImgContainer,
  ProductImg,
  ProductDescription,
  ProductName,
  ProductPrice,
  ArrowContainer,
  Input,
  Arrows,
  ProductDetails,
  CartButton,
} from "./SingleProductStyles";

const SingleProduct = ({ item, index }) => {
  const dispatch = useDispatch();

  const [num, setNum] = React.useState(1);
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
  let handleChange = e => {
    setNum(parseInt(e.target.value));
  };

  return (
    <ProductCard key={index}>
      <ImgContainer>
        {/* <ProductImg src={item.data.images} alt="Product" /> */}
        <ProductImg />
      </ImgContainer>
      <ProductDescription>
        <ProductName>{item.data.name}</ProductName>
        <ProductPrice>
          <div>${item.data.metadata.price}</div>
          <ArrowContainer>
            <Input type="string" value={num} onChange={handleChange} />
            <Arrows>
              <TiArrowSortedUp onClick={incNum} />
              <TiArrowSortedDown onClick={decNum} />
            </Arrows>
          </ArrowContainer>
        </ProductPrice>
        <ProductDetails>
          <div>{item.data.metadata.size}</div>
          <div>{item.data.description}</div>
        </ProductDetails>
      </ProductDescription>
      <CartButton
        onClick={() => dispatch(addToCart({ ...item, quantity: num }))}>
        ADD TO CART
      </CartButton>
    </ProductCard>
  );
};

export default SingleProduct;
