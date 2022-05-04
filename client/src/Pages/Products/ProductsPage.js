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
  align-items: center;
`;

const ImgContainer = styled.div`
  min-width: 150px;
  /* min-height: 215px; */
  max-width: 200px;
  max-height: 200px;
  height: 100%;
  width: 100%;
`;
const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(https://picsum.photos/400);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ProductDescription = styled.div`
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
`;

const ProductsPage = () => {
  const products = useSelector(state => state.productData.entities);

  const dispatch = useDispatch();

  return (
    <ProductWrapper>
      <ProductBody>
        <ProductDropdown>my boys</ProductDropdown>
        <ProductGrid>
          {products?.map((item, index) => (
            <ProductCard key={index} item={item}>
              <ImgContainer>
                <ProductImg />
              </ImgContainer>
              <ProductDescription>
                <h2>{item.data.name}</h2>
                <h3>{item.data.metadata.price}</h3>
                <h3>{item.data.metadata.size}</h3>
                <h3>{item.data.description}</h3>
              </ProductDescription>
              <CartButton
                onClick={() =>
                  dispatch(addToCart({ ...products[index], quantity: 1 }))
                }
              >
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
