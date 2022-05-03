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
  height: 75%;
  width: 80%;
  align-items: center;
  flex-direction: column;
  background-color: salmon;
  padding: 20px;
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
  height: ;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  background-color: #dfd5b180;
  border-radius: 8px;
  border: black;
`;
