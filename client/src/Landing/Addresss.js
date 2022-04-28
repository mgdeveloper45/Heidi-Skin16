import React from "react";
import {
  Address,
  AddressContainer,
  Code,
  Directions,
  H3,
  P,
} from "./AddressStyles";
import location from "../images/navigation-32.png";

const Addresss = () => {
  const styles = {
    location: {
      transform: "rotate(33.75deg)",
    },
  };
  return (
    <AddressContainer>
      <Address>
        <H3>817 4th St. #B4 (SFL)</H3>
        <H3>San Rafael, CA 94901</H3>
        <H3>(415) 529-5076 (call only)</H3>
      </Address>
      <Directions>
        <H3>
          Get Directions
          <img src={location} alt="gps" style={styles.location} />
        </H3>
      </Directions>
      <Code>
        <P>Service by Appointment only.</P>
        <P>Door Code Required.</P>
      </Code>
    </AddressContainer>
  );
};

export default Addresss;
