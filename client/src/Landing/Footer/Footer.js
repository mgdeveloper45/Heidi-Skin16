import React from "react";
import {
  Declaration, Foot, FooterWrapper, HR, LI, 
  NAME, Policy, Rights, Span, Social, UL,
} from "./FooterStyles";
import { AiOutlineGoogle } from "react-icons/ai";
// import ScrollIntoView from 'react-scroll-into-view'
import { FaFacebook, FaTwitter, FaYelp } from "react-icons/fa";

const Footer = ({close}) => {
  const setToTrue = () => {
    close("/?visible=true")
    // window.scrollIntoView({behavior:"smooth", block:"start"})
    window.scrollTo({top:1000,behavior:"smooth"})
  }
  
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
          <div onClick={() => setToTrue()} style={styles.links}>
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
