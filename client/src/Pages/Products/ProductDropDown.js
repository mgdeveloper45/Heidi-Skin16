import { useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const DropContainer = styled.div``;

const MenuBtn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  font-size: 40px;

  :hover {
    color: gray;
  }
`;

const MenuPosition = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Menu = styled.div`
  text-align: center;
  font-size: 20px;

  position: absolute;
  padding: 1rem;
  letter-spacing: 0.05rem;
  border-radius: 5px;
  z-index: 1;

  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: black;
    :hover {
      color: gray;
    }
  }
`;

const ProductDropDown = () => {
  const [value, setValue] = useState(false);

  return (
    <DropContainer>
      <MenuBtn onClick={() => setValue(!value)}>
        <FiMenu />
      </MenuBtn>
      {value === true ? (
        <MenuPosition>
          <Menu>
            <CategoryLinks>My</CategoryLinks>
            <CategoryLinks>Boys</CategoryLinks>
          </Menu>
        </MenuPosition>
      ) : null}
    </DropContainer>
  );
};

export default ProductDropDown;
