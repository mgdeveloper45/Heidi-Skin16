import React from "react";
import { useSelector } from "react-redux";
import {
  DropDown,
  ProductBody,
  ProductGrid,
  ProductWrapper,
} from "./ProductsPageStyles.js";
//components
import SingleProduct from "./SingleProduct";
import ProductDropDown from "./ProductDropDown";

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
