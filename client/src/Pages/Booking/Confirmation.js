import React from "react";
import {
  BookingConfirmation,
  ConfirmationCard,
  ConfirmationRow,
  ConfirmationRowReverse,
  Directions,
} from "./ConfirmationStyles";
import location from "../../images/navigation-32.png";
const Confirmation = () => {
  const styles = {
    location: {
      height: "20px",
      width: "20px",
      transform: "rotate(33.75deg)",
    },
  };
  return (
    <BookingConfirmation>
      <h1>Booking Confirmation</h1>
      <ConfirmationCard lineHeight="50px">
        <p>
          Thank you for booking a SKIN 16 Facial with Heidi. Please call
          415-529-5076 when you arrive.
        </p>
        <p> We appreciate your punctuality. </p>
        <p>
          Be sure to check out our <span>appointment</span> and
          <span>cancellation policy and covid-19 protocols.</span>
        </p>
      </ConfirmationCard>
      <div
        style={{ width: "80%", backgroundColor: "rgba(216, 155, 166, 0.75)" }}
      >
        <hr />
      </div>
      <ConfirmationCard flexDirection="row">
        <ConfirmationRow>
          <h1>Address:</h1>
        </ConfirmationRow>
        <ConfirmationRowReverse>
          <h4> 817 4th St. #B4 (SFL)</h4>
          <h4>San Rafael, CA 94901</h4>
          <h4>(415) 529-5076 (call only)</h4>
          <Directions
            href="https://www.google.com/maps/dir//817+B+4th+St+San+Rafael,+CA+94901/@37.9725144,-122.5243442,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808599f736820783:0xb154b3530625ed23!2m2!1d-122.5243442!2d37.9725144"
            target="_blank"
            rel="noreferrer"
          >
            <h4>
              Get Directions
              <img src={location} alt="gps" style={styles.location} />
            </h4>
          </Directions>
          <p>Service by Appointment only.</p>
          <p>Door Code Required.</p>
        </ConfirmationRowReverse>
      </ConfirmationCard>
    </BookingConfirmation>
  );
};

export default Confirmation;
