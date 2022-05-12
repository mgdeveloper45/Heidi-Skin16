import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlicer.js";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const ProductCard = styled.div`
  height: 400px;
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
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
`;

const ProductName = styled.div``;
const ProductPrice = styled.div`
  display: flex;
`;

const Input = styled.input`
  text-align: center;
  width: 25px;
  height: 25px;
  margin-left: 25px;
`;

const Arrows = styled.div`
  display: flex;
  flex-flow: column;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-flow: column;
`;

const CartButton = styled.button`
  height: 50px;
  width: 75%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  background-color: rgba(216, 155, 166, 0.75);
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;

const SingleProduct = ({ item, index }) => {
  const products = useSelector(state => state.productData.entities);

  const dispatch = useDispatch();

  const [num, setNum] = React.useState(1);
  let incNum = () => {
    setNum(num + 1);
  };
  let decNum = () => {
    if (num <= 1) {
      setNum(1);
    } else {
      setNum(num - 1);
    }
  };
  let handleChange = e => {
    setNum(e.target.value);
  };

  return (
    <ProductCard key={index}>
      <ImgContainer>
        <ProductImg src="https://picsum.photos/400" alt="Product" />
      </ImgContainer>
      <ProductDescription>
        <ProductName>{item.data.name}</ProductName>
        <ProductPrice>
          <div>${item.data.metadata.price}</div>
          <div>
            <Input type="text" value={num} onChange={handleChange} />
            <Arrows>
              <TiArrowSortedUp onClick={incNum} />
              <TiArrowSortedDown onClick={decNum} />
            </Arrows>
          </div>
        </ProductPrice>
        <ProductDetails>
          <div>{item.data.metadata.size}</div>
          <div>{item.data.description}</div>
        </ProductDetails>
      </ProductDescription>
      <CartButton
        onClick={() =>
          dispatch(addToCart({ ...products[index], quantity: num }))
        }
      >
        ADD TO CART
      </CartButton>
    </ProductCard>
  );
};

export default SingleProduct;
