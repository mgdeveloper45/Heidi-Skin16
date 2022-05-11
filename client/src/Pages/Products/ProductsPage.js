import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//components
import SingleProduct from "./SingleProduct";
import ProductDropDown from "./ProductDropDown";

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

const DropDown = styled.h1`
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
  column-gap: 30px;
  row-gap: 30px;
`;

const ProductsPage = () => {
  const products = useSelector((state) => state.productData.entities);

  return (
    <ProductWrapper>
      <ProductBody>
        <DropDown>
          PRODUCTS
          <ProductDropDown />
        </DropDown>
        <ProductGrid>
          {products?.map((item, index) => (
            <SingleProduct key={index} item={item} />
          ))}
        </ProductGrid>
      </ProductBody>
    </ProductWrapper>
  );
};

export default ProductsPage;
