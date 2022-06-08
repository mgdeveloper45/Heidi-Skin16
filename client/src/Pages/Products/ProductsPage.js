import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//components
import SingleProduct from "./SingleProduct";
import ProductDropDown from "./ProductDropDown";

//stylesheet
import {
  ProductWrapper,
  ProductBody,
  DropDown,
  ProductGrid,
} from "./ProductsPageStyles";

const ProductsPage = () => {
  const products = useSelector(state => state.productData.entities);

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
