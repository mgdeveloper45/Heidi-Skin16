import React from "react";
import {
  Address,
  AddressContainer,
  Code,
  Directions,
  GetDirections,
  H3,
  P,
} from "./AddressStyles";
import location from "../../images/navigation-32.png";
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
        <GetDirections
          href="https://www.google.com/maps/dir//817+B+4th+St+San+Rafael,+CA+94901/@37.9725144,-122.5243442,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808599f736820783:0xb154b3530625ed23!2m2!1d-122.5243442!2d37.9725144"
          target="_blank"
          rel="noreferrer"
        >
          <H3>
            Get Directions
            <img src={location} alt="gps" style={styles.location} />
          </H3>
        </GetDirections>
      </Directions>
      <Code>
        <P>Service by Appointment only.</P>
        <P>Door Code Required.</P>
      </Code>
    </AddressContainer>
  );
};

export default Addresss;
