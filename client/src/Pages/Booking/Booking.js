import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookingButton,
  BookingContainer,
  BookingContent,
  BookingForm,
  // BookingInput,
  BookingLabel,
  BookingOption,
  BookingSelect,
  BookingTitle,
  BookingWrapper,
  LinkStyles,
} from './BookingStyles';

const Booking = () => {
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
                <BookingOption>Cars</BookingOption>
                <BookingOption>Volvo</BookingOption>
                <BookingOption>Saab</BookingOption>
                <BookingOption>Fiat</BookingOption>
              </BookingSelect>
            </BookingForm>
            <BookingForm>
              <BookingLabel>Type</BookingLabel>
              <BookingSelect>
                <BookingOption>Cars</BookingOption>
                <BookingOption>Volvo</BookingOption>
                <BookingOption>Saab</BookingOption>
                <BookingOption>Fiat</BookingOption>
              </BookingSelect>
            </BookingForm>
            <BookingForm>
              <BookingLabel>Add-ons</BookingLabel>
              <BookingSelect>
                <BookingOption>Cars</BookingOption>
                <BookingOption>Volvo</BookingOption>
                <BookingOption>Saab</BookingOption>
                <BookingOption>Fiat</BookingOption>
              </BookingSelect>
            </BookingForm>
            <BookingForm>
              <BookingLabel>Availability</BookingLabel>
              <BookingSelect>
                <BookingOption>Cars</BookingOption>
                <BookingOption>Volvo</BookingOption>
                <BookingOption>Saab</BookingOption>
                <BookingOption>Fiat</BookingOption>
              </BookingSelect>
            </BookingForm>

            {/* <BookingForm>
              <BookingLabel>Promo Code</BookingLabel>
              <BookingInput />
            </BookingForm> */}
            <BookingButton>Book a Session</BookingButton>
            <LinkStyles>
              <p>In salon appointments only</p> <br />
              <Link to='/policy'>Appointment Policy</Link>
              <br />
              <Link to='/covid'>Covid 19 Protocols</Link>
            </LinkStyles>
          </BookingContent>
        </BookingContainer>
      </BookingWrapper>
    </div>
  );
};

export default Booking;
