import React from "react";
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
  HeaderSkinny,
} from "./FooterStyles";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYelp } from "react-icons/fa";

const Footer = ({ close }) => {
  const setToTrue = () => {
    close("/?visible=true");
    // window.scrollIntoView({behavior:"smooth", block:"start"})
    // window.scrollTo({top:1000,behavior:"smooth"})
  };

  const scrollToAbout = () => {
    const timer = setTimeout(() => {
      const aboutScroll = document.getElementById("about-us");
      aboutScroll.scrollIntoView({ behavior: "smooth" });
      clearTimeout(timer);
    }, 1000);
  };

  const styles = {
    icons: {
      height: "35px",
      width: "35px",
      margin: "0 10px 0 10px ",
    },
    yelp: {
      height: "35px",
      width: "35px",
      margin: "0 10px 0 10px ",
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
          <div
            onClick={() => {
              setToTrue();
              scrollToAbout();
            }}
            style={styles.links}
          >
            <LI>About Us</LI>
          </div>
          <div onClick={() => setToTrue()} style={styles.links}>
            <LI>Gallery</LI>
          </div>
          <div onClick={() => close("contact")} style={styles.links}>
            <LI>Contact Us</LI>
          </div>
        </UL>
        <Policy>
          <div onClick={() => close("booking")} style={styles.links}>
            <LI>Booking</LI>
          </div>
          <div onClick={() => close("policy")} style={styles.links}>
            <LI>Policies</LI>
          </div>
          <div onClick={() => close("covid")} style={styles.links}>
            <LI>Covid Protocols</LI>
          </div>
        </Policy>
      </Declaration>
      <HR />
      <Foot>
        <NAME>
          <HeaderSkinny>Heidi</HeaderSkinny>
          <h3>Skin16</h3>
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
