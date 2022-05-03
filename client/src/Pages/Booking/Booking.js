import React from 'react';
import {
  BookingContainer,
  BookingContent,
  BookingForm,
  BookingInput,
  BookingLabel,
  BookingOption,
  BookingSelect,
  BookingTitle,
  BookingWrapper,
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
            <BookingForm>
              <BookingLabel>Availability</BookingLabel>
              <BookingInput type='text' />
            </BookingForm>
          </BookingContent>
        </BookingContainer>
      </BookingWrapper>
    </div>
  );
};

export default Booking;
