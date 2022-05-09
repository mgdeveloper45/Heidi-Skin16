import React from 'react';
import {
  BookingConfirmation,
  BookingCard,
  BookingColumn,
  BookingRow,
  BookingRowReverse,
  CartButton,
} from './BookingStyles';

const Confirmation = () => {
  return (
    <BookingConfirmation>
      <h1>Booking Confirmation</h1>
      <BookingCard>
        <p>
          Thank you for booking a SKIN 16 Facial with Heidi. Please call
          415-529-5076 when you arrive.
          <br /> We appreciate your punctuality.
          <br /> Be sure to check out our <span>appointment</span> and{' '}
          <span>cancellation policy and covid-19 protocols.</span>
        </p>
      </BookingCard>
      <div style={{ width: '80%', backgroundColor: 'salmon' }}>
        <hr />
      </div>
      <BookingCard>
        <BookingRow>
          <p>Address:</p>
        </BookingRow>
        <BookingRowReverse>
          817 4th St., #B4 (2FL)
          <br /> San Rafael, CA 94801
          <CartButton>Get Directions</CartButton>
          <div
            style={{
              display: 'flex',
              height: '20px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: '30px',
            }}
          >
            <p>*Service by Appointment only.</p>
            <p> *Door Code Required.</p>
          </div>
        </BookingRowReverse>
      </BookingCard>
    </BookingConfirmation>
  );
};

export default Confirmation;
