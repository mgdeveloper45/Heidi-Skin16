import { 
  CategoryLinks, DropContainer,
  Head, Header, Heading, Icon, Icons, Logo, Menu,
  MenuBtn, MenuPosition, NavContainer, Navi, P, Span
} 
from "./NavStyles";
import { Link } from "react-router-dom";
import { BsCart3, BsSearch } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { allCategories } from "../utils/rawData";
import Badge from "@mui/material/Badge";
import { useEffect } from "react";

const Nav = ({ animateImg, close, visible }) => {
  const [services, setService] = useState(false);
  const [dropDown, setDropDown] = useState([]); 

  const cartQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  useEffect(() => {
    setDropDown(allCategories); 
  }, [])

  return (
    <NavContainer>
      <Header>
        <Head />
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Heading onClick={() => animateImg()}>
              <Span>HEIDI</Span>SKIN16
            </Heading>
          </Link>
        </Logo>
        <Icons>
          <BsSearch size={25} />
          <Icon>
            <Badge badgeContent={cartQuantity} color="primary">
              <BsCart3
                onClick={() => close("/cart")}
                style={{ marginLeft: "10px" }}
                size={30}
              />
            </Badge>
          </Icon>
        </Icons>
      </Header>
      <Navi>
        <div style={{display:"flex"}}>
        <P style={{display:"flex"}} onClick={() => close("/services")}>Salon Service</P>
        <DropContainer>
      <MenuBtn onClick={() => setService(!services)}>
        <MdOutlineArrowDropDown/>
        {/* <BsCaretDownSquare /> */}
      </MenuBtn>
      {services === true ? (
        <MenuPosition>
          <Menu >
            {dropDown.map((service, idx) => (
              <CategoryLinks key={idx}>{service.title}</CategoryLinks>

            ))}
          </Menu>
        </MenuPosition>
      ) : null}
    </DropContainer>
    </div>
        <P onClick={() => close("/products")}>Buy Products</P>

        <P onClick={() => close("/contact")}>Contact Us</P>
      </Navi>
    </NavContainer>
  );
};

export default Nav;
