import styled from 'styled-components';

export const BookingWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* height: 39vh; */
  height: 100vh;
  width: 100vw;
  background-color: brown;
`;

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 70%;
  background-color: white;
`;
export const BookingTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 100%;
`;

export const BookingContent = styled.div`
  display: flex;
  height: 70%;
  width: 80%;
  align-items: center;
  flex-direction: column;

  padding: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BookingLabel = styled.label`
  background-color: white;
`;
export const BookingSelect = styled.select`
  height: 30%;
  min-width: 380px;
  border-radius: 8px;
  background-color: #dfd5b180;
`;
export const BookingOption = styled.option``;
export const BookingForm = styled.form`
  height: 15%;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  display: flex;
`;

export const BookingInput = styled.input.attrs({ type: 'text' })`
  display: flex;
  height: 30%;
  min-width: 380px;
  align-items: center;
  justify-content: space-between;
  background-color: #dfd5b180;
  border-radius: 8px;
`;
export const BookingButton = styled.button`
  width: 40%;
  height: 7%;
  border-radius: 8px;
  border: none;
  background-color: rgba(13, 104, 120);
  color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  font-weight: 600;
  font-size: larger;
`;
