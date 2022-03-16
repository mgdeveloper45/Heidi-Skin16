import {
  Header,
  Heading,
  Icons,
  List,
  Logo,
  NavContainer,
  Navi,
  P,
  Span,
} from "./NavStyles";
import { Link } from "react-router-dom";
import { BsCart3, BsSearch } from "react-icons/bs";

const Nav = () => {
  return (
    <NavContainer>
      <Header>
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Heading>
              <Span>HEIDI</Span>SKIN16
            </Heading>
          </Link>
        </Logo>
        <Icons>
          <BsSearch size={25} />
          <BsCart3 style={{ marginLeft: "10px" }} size={30} />
        </Icons>
      </Header>
      <Navi>
        <List>
          <Link
            to="services"
            style={{ textDecoration: "none", color: "black" }}
          >
            <P>Salon Service</P>
          </Link>
        </List>
        <List>
          <Link
            to="products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <P>Buy Products</P>
          </Link>
        </List>
        <List>
          <Link to="contact" style={{ textDecoration: "none", color: "black" }}>
            <P>Contact Us</P>
          </Link>
        </List>
      </Navi>
    </NavContainer>
  );
};

export default Nav;
