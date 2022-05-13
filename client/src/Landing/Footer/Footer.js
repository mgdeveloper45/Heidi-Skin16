import React from "react";
import { Link } from "react-router-dom";
import {
  Declaration,
  Foot,
  FooterWrapper,
  HR,
  LI,
  NAME,
  Policy,
  Rights,
  Span,
  Social,
  UL,
} from "./FooterStyles";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYelp } from "react-icons/fa";

const Footer = () => {
  const styles = {
    icons: {
      height: "55px",
      width: "55px",
    },
    yelp: {
      height: "45px",
      width: "45px",
      paddingBottom: "5px",
    },
    span: {
      fontSize: "72px",
    },
    links: {
      textDecoration: "none",
      color: "black",
    },
  };
  return (
    <FooterWrapper>
      <Declaration>
        <UL>
          <Link to="about" style={styles.links}>
            <LI>About Us</LI>
          </Link>
          <Link to="/?visible=true" style={styles.links}>
            <LI>Gallery</LI>
          </Link>
          <Link to="contact" style={styles.links}>
            <LI>Contact Us</LI>
          </Link>
        </UL>
        <Policy>
          <Link to="bookings" style={styles.links}>
            <LI>Bookings</LI>
          </Link>
          <Link to="policy" style={styles.links}>
            <LI>Policy</LI>
          </Link>
          <Link to="covid" style={styles.links}>
            <LI>Covid Protocols</LI>
          </Link>
        </Policy>
      </Declaration>
      <HR />
      <Foot>
        <NAME>
          <Span style={styles.span}>Heidi</Span>Skin16
        </NAME>
        <Rights>&copy; 2022 All Rights Reserved HeidiSkin16</Rights>
        <Social>
          <FaFacebook style={styles.icons} />
          <FaTwitter style={styles.icons} />
          <AiOutlineGoogle style={styles.icons} />
          <FaYelp style={styles.yelp} />
        </Social>
      </Foot>
    </FooterWrapper>
  );
};

export default Footer;
