import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlicer.js";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const ProductCard = styled.div`
  height: 400px;
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-around;

  margin-bottom: 100px;
`;

const ImgContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const ProductImg = styled.img`
  width: 100%;

  min-width: 200px;

  max-width: 200px;
  max-height: 200px;
`;
const ProductDescription = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 25px;
`;

const ProductName = styled.div``;
const ProductPrice = styled.div`
  display: flex;
`;

export const ArrowContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  text-align: center;
  width: 30px;
  height: 25px;
  margin-left: 25px;
  border: 1px solid;
  border-radius: 5px;

  background-color: #e5e5e5;
`;

export const Arrows = styled.div`
  display: flex;
  flex-flow: column;
  /* font-size: 18px; */
  color: #0d6878;

  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-flow: column;
`;

const CartButton = styled.button`
  height: 50px;
  width: 65%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  background-color: rgba(216, 155, 166, 0.75);
  border: none;
  font-weight: bold;

  margin-left: 25px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;

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
  let handleChange = (e) => {
    setNum(parseInt(e.target.value));
  };

  return (
    <ProductCard key={index}>
      <ImgContainer>
        <ProductImg src={item.data.images} alt="Product" />
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
        onClick={() => dispatch(addToCart({ ...item, quantity: num }))}
      >
        ADD TO CART
      </CartButton>
    </ProductCard>
  );
};

export default SingleProduct;
