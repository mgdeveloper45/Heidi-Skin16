import { useState } from "react";
import styled from "styled-components";
// import { BsCaretDownSquare } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

//stylesheet
import {
  DropContainer,
  MenuBtn,
  MenuPosition,
  Menu,
  CategoryLinks,
} from "./ProductDropDownStyles";

const ProductDropDown = () => {
  const [value, setValue] = useState(false);

  return (
    <DropContainer>
      <MenuBtn onClick={() => setValue(!value)}>
        {/* <BsCaretDownSquare /> */}
        <MdOutlineArrowDropDown />
      </MenuBtn>
      {value === true ? (
        <MenuPosition>
          <Menu>
            <CategoryLinks>Modvellum Clinical Skincare</CategoryLinks>
            <CategoryLinks>Société Clinical Skincare</CategoryLinks>
            <CategoryLinks>Incellderm</CategoryLinks>
            <CategoryLinks>Sculplla H2</CategoryLinks>
            <CategoryLinks>Esthemax</CategoryLinks>
            <CategoryLinks>Farm House Fresh</CategoryLinks>
          </Menu>
        </MenuPosition>
      ) : null}
    </DropContainer>
  );
};

export default ProductDropDown;
