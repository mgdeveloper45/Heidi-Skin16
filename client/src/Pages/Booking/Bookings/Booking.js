import React from "react";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly";
import {
  Availability,
  BookingButton,
  BookingContainer,
  BookingContent,
  BookingForm,
  BookingLabel,
  BookingOption,
  BookingSelect,
  BookingTitle,
  BookingWrapper,
  LinkStyles,
} from "../Bookings/BookingStyles";
import { useState } from "react";

const Booking = ({ categories, addOn }) => {
  const [calendar, setCalendar] = useState(false);
  const [value, setValue] = useState("Facials");

  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const styles = {
    link: {
      textDecoration: "none",
      color: "black",
    },
  };
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
              <BookingSelect onChange={onChange}>
                {categories.map((item, idx) => (
                  <>
                    <BookingOption key={idx}>{item.title}</BookingOption>
                  </>
                ))}
              </BookingSelect>
            </BookingForm>
            <BookingForm>
              <BookingLabel>Type</BookingLabel>
              <BookingSelect
                onChange={e => {
                  console.log(e.target.value);
                }}
              >
                {categories.map(type =>
                  type.title === value
                    ? type.subcategories.map((item, index) => (
                        <BookingOption value={item.duration} key={index}>
                          {item.title}{" "}
                        </BookingOption>
                      ))
                    : null
                )}
              </BookingSelect>
            </BookingForm>
            <BookingForm>
              <BookingLabel>Add-ons</BookingLabel>
              <BookingSelect>
                {addOn.map(add =>
                  add.services.map((item, idx) => (
                    <>
                      <BookingOption key={idx}>{item.title}</BookingOption>
                    </>
                  ))
                )}
              </BookingSelect>
            </BookingForm>
            <Availability>
              <BookingLabel>Availability</BookingLabel>
              <BookingButton onClick={() => setCalendar(true)}>
                Book a Session
              </BookingButton>
              <PopupModal
                url="https://calendly.com/heidiskin16"
                target="_blank"
                rel="noreferrer"
                onModalClose={() => setCalendar(false)}
                open={calendar}
                rootElement={document.getElementById("root")}
              />
            </Availability>
            <LinkStyles>
              <p>In salon appointments only</p> <br />
              <Link style={styles.link} to="/policy">
                Appointment Policy
              </Link>
              <br />
              <Link style={styles.link} to="/covid">
                Covid 19 Protocols
              </Link>
            </LinkStyles>
          </BookingContent>
        </BookingContainer>
      </BookingWrapper>
    </div>
  );
};

export default Booking;
