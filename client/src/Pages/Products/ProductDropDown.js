import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  CategoryLinks,
  DropContainer,
  Menu,
  MenuBtn,
  MenuPosition,
} from "./ProductDropDownStyles";
import "../../Nav/DropDownStyle.css";

const ProductDropDown = () => {
  const [value, setValue] = useState(false);

  const dropDownStyle = {
    animation: "inAnimation 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  };

  return (
    <DropContainer>
      <MenuBtn onClick={() => setValue(!value)}>
        <MdOutlineArrowDropDown style={{ fontSize: "40px" }} />
        {value === true ? (
          <MenuPosition style={value ? dropDownStyle : null}>
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
      </MenuBtn>
    </DropContainer>
  );
};

export default ProductDropDown;
