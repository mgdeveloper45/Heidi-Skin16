import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
`;
const ProductGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
`;
const ProductCard = styled.div`
  height: 400px;
  width: 300px;
  background-color: blue;
  display: flex;
  flex-flow: column;
`;

const ProductIMG = styled.div``;
const ProductDescription = styled.div``;

const ProductsPage = () => {
  const products = useSelector(state => state.productData.entities);

  return (
    <ProductWrapper>
      <ProductBody>
        <ProductDropdown>my boys</ProductDropdown>
        <ProductGrid>
          {products?.map((item, index) => (
            <ProductCard key={index} item={item}>
              <ProductIMG>
                <img></img>
              </ProductIMG>
              <ProductDescription>
                {item.data.name}
                {item.data.metadata.price}
                {item.data.metadata.size}
                {item.data.description}
              </ProductDescription>
              <button style={{ width: '50px', height: '25px' }}></button>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductBody>
    </ProductWrapper>
  );
};

export default ProductsPage;
