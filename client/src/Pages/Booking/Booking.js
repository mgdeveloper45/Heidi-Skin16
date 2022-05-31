import React from "react";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly";

import {
  Availability,BookingButton,BookingContainer,
  BookingContent,BookingForm,BookingLabel,BookingOption,
  BookingSelect,BookingTitle,BookingWrapper,LinkStyles,
} from "./BookingStyles";
import { useState } from "react";

// Booking Input might be used going forward

const Booking = () => {
  const [calendar, setCalendar] = useState(false)
  const styles = {
    link: {
      textDecoration: "none",
      color: "black",
    }
  }
  return (
    <div>
      <BookingWrapper>
        <BookingContainer>
          <BookingTitle>
            <h1>Booking</h1>
          </BookingTitle>
          <BookingContent>
            <BookingForm>
              <BookingLabel>Service</BookingLabel>
              <BookingSelect>
                <BookingOption>Facials</BookingOption>
                <BookingOption>Peels</BookingOption>
                <BookingOption>LED Therapy</BookingOption>
                <BookingOption>Scalp Treatments</BookingOption>
              </BookingSelect>
            </BookingForm>
            <BookingForm>
              <BookingLabel>Type</BookingLabel>
              <BookingSelect>
                <BookingOption>SKIN16 Facial</BookingOption>
                <BookingOption>Porcelain Nano-fil Facial</BookingOption>
                <BookingOption>The Modern Facial</BookingOption>
                <BookingOption>Grow Gorgeous Gold</BookingOption>
                {/* Peels Option */}
                <BookingOption>Porcelain Peel</BookingOption>
                <BookingOption>Rough Peel</BookingOption>
                <BookingOption>Good Peel</BookingOption>
                {/* LED Therapy Option */}
                <BookingOption>Sculplla + H2 + LED Light</BookingOption>
                <BookingOption>
                  Sculplla + H2 + LED Light w/ HydroJelly Mask
                </BookingOption>
                {/* Scalp Treatments */}
                <BookingOption>Pure Flash</BookingOption>
                <BookingOption>Urban Detox Fair</BookingOption>
              </BookingSelect>
            </BookingForm>
            <BookingForm>
              <BookingLabel>Add-ons</BookingLabel>
              <BookingSelect>
                <BookingOption>LED Light</BookingOption>
                <BookingOption>Dermaplaning</BookingOption>
                <BookingOption>Face Peel</BookingOption>
                <BookingOption>Face & neck Peel</BookingOption>
                <BookingOption>Face, Neck & Decollete Peel</BookingOption>
                <BookingOption>Oxygen Therapy</BookingOption>
                <BookingOption>2 Steps Oxygen</BookingOption>
                <BookingOption>Hot Oil Hand Treatment</BookingOption>
                <BookingOption>Hot Oil Hand Treatment w/ Peel</BookingOption>
                <BookingOption>Brazilian Wax</BookingOption>
                <BookingOption>Soft Wax</BookingOption>
                <BookingOption>Hard Wax</BookingOption>
              </BookingSelect>
            </BookingForm>
            <Availability>
              <BookingLabel>Availability</BookingLabel>
              <BookingButton onClick={() => setCalendar(true)}>
                Book a Session
              </BookingButton>
              <PopupModal url="https://calendly.com/heidiskin16"
                target="_blank" rel="noreferrer"
                onModalClose={() => setCalendar(false)}
                open={calendar} 
                rootElement={document.getElementById("root")}/>
            </Availability>

            {/* <BookingForm>
              <BookingLabel>Promo Code</BookingLabel>
              <BookingInput />
            </BookingForm> */}

            <LinkStyles>
              <p>In salon appointments only</p> <br />
              <Link style={styles.link} to="/policy">Appointment Policy</Link>
              <br />
              <Link style={styles.link} to="/covid">Covid 19 Protocols</Link>
            </LinkStyles>
          </BookingContent>
        </BookingContainer>
      </BookingWrapper>
    </div>
  );
};

export default Booking;
