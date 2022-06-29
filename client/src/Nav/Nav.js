import {
  CategoryLinks,
  DropContainer,
  Head,
  Header,
  Heading,
  Icon,
  Icons,
  Logo,
  Menu,
  MenuBtn,
  MenuPosition,
  NavContainer,
  Navi,
  P,
  Span,
} from "./NavStyles";
import { Link } from "react-router-dom";
import { BsCart3, BsSearch } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { useEffect } from "react";
import "./DropDownStyle.css";

const Nav = ({ animateImg, close, visible, categories }) => {
  const [services, setService] = useState(false);
  const [dropDown, setDropDown] = useState([]);

  const cartQuantity = useSelector(state => state.cart.cartTotalQuantity);
  useEffect(() => {
    setDropDown(categories);
  }, []);

  const dropDownStyle = {
    animation: "inAnimation 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  };

  return (
    <NavContainer>
      <Header>
        <Head />
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Heading
              onClick={() => {
                animateImg();
                setService(false);
              }}>
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
        <div style={{ display: "flex", width: "250px" }}>
          <P
            onClick={() => {
              close("/services");
              setService(false);
            }}>
            Salon Service
          </P>
          <MenuBtn onClick={() => setService(!services)}>
            <MdOutlineArrowDropDown style={{ fontSize: "40px" }} />
            <DropContainer style={services ? dropDownStyle : null}>
              {services === true ? (
                <MenuPosition>
                  <Menu>
                    {dropDown.map((service, idx) => (
                      <CategoryLinks key={idx}>{service.title}</CategoryLinks>
                    ))}
                  </Menu>
                </MenuPosition>
              ) : null}
            </DropContainer>
          </MenuBtn>
        </div>
        <P
          onClick={() => {
            close("/products");
            setService(false);
          }}>
          Buy Products
        </P>
        <P
          onClick={() => {
            close("/contact");
            setService(false);
          }}>
          Contact Us
        </P>
      </Navi>
    </NavContainer>
  );
};

export default Nav;
