import {
  Head,
  Header,
  Heading,
  Icon,
  Icons,
  Logo,
  NavContainer,
  Navi,
  P,
  Span,
} from "./NavStyles";
import { Link, useNavigate } from "react-router-dom";
import { BsCart3, BsSearch } from "react-icons/bs";

const Nav = ({ animateImg, visible }) => {
  const navigate = useNavigate();

  const closeThenRedirect = (navi) => {
    return visible ? animateImg().then(() => navigate(navi)) : navigate(navi);
  };

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
            <BsCart3
              onClick={() => closeThenRedirect("/cart")}
              style={{ marginLeft: "10px" }}
              size={30}
            />
          </Icon>
        </Icons>
        {/* <form action="/create-checkout-session" method="POST">
          <button type="submit">Checkout</button>
        </form> */}
      </Header>
      <Navi>
        <P onClick={() => closeThenRedirect("/services")}>Salon Service</P>

        <P onClick={() => closeThenRedirect("/products")}>Buy Products</P>

        <P onClick={() => closeThenRedirect("/contact")}>Contact Us</P>
      </Navi>
    </NavContainer>
  );
};

export default Nav;
