import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlicer.js';

const ProductWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const ProductBody = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const ProductDropdown = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  margin-top: 100px;
  margin-bottom: 100px;
`;
const ProductGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
`;
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
const ProductPrice = styled.div``;
const ProductDetails = styled.div`
  display: flex;
  flex-flow: column;
`;

const CartButton = styled.button`
  height: 50px;
  width: 75%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  background-color: #e1b4bd;
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;

const ProductsPage = () => {
  const products = useSelector(state => state.productData.entities);

  const dispatch = useDispatch();

  const [num, setNum] = React.useState(0);
  let incNum = () => {
    setNum(num + 1);
  };
  let decNum = () => {
    setNum(num - 1);
  };
  let handleChange = e => {
    setNum(e.target.value);
  };

  return (
    <ProductWrapper>
      <ProductBody>
        <ProductDropdown>my boys</ProductDropdown>
        <ProductGrid>
          {products?.map((item, index) => (
            <ProductCard key={index} item={item}>
              <ImgContainer>
                <ProductImg src='https://picsum.photos/400' alt='Product' />
              </ImgContainer>
              <ProductDescription>
                <ProductName>{item.data.name}</ProductName>
                <ProductPrice>
                  <div>{item.data.metadata.price}</div>
                  <div>
                    <input type='text' value={num} onChange={handleChange} />
                    <button onClick={incNum}>+</button>
                    <button onClick={decNum}>-</button>
                  </div>
                </ProductPrice>
                <ProductDetails>
                  <div>{item.data.metadata.size}</div>
                  <div>{item.data.description}</div>
                </ProductDetails>
              </ProductDescription>
              <CartButton
                onClick={() =>
                  dispatch(addToCart({ ...products[index], quantity: 1 }))
                }>
                ADD TO CART
              </CartButton>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductBody>
    </ProductWrapper>
  );
};

export default ProductsPage;
