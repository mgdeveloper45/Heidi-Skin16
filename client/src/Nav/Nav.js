import {
  Head, Header, Heading, Icon, Icons,
  Logo, NavContainer, Navi, P, Span
} 
from "./NavStyles";
import { Link } from "react-router-dom";
import { BsCart3, BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";

const Nav = ({ animateImg, close, visible }) => {
  const cartQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

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
        <P onClick={() => close("/services")}>Salon Service</P>

        <P onClick={() => close("/products")}>Buy Products</P>

        <P onClick={() => close("/contact")}>Contact Us</P>
      </Navi>
    </NavContainer>
  );
};

export default Nav;
