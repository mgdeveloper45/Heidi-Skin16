import styled from 'styled-components';

export const BookingWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 70%;
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
  width: 780px;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BookingForm = styled.form`
  display: flex;
  height: 10%;
  width: 90%;
  margin-left: 20%;
`;
export const BookingLabel = styled.label`
  display: flex;
  width: 100px;
  line-height: 26px;
  margin-right: 10px;
`;
export const BookingSelect = styled.select`
  height: 40px;
  width: 45%;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #dfd5b180;
  border: 1px solid black;
`;
export const BookingOption = styled.option``;
// Not certain if this component will or will not be used

// export const BookingInput = styled.input.attrs({ type: 'text' })`
//   height: 40px;
//   width: 45%;
//   margin-left: 10px;
//   border-radius: 3px;
//   background-color: #dfd5b180;
//   border: 1px solid black;
// `;
export const BookingButton = styled.button`
  width: 40%;
  height: 7%;
  border-radius: 8px;
  border: none;
  background-color: #0d6878bf;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  font-weight: 600;
  font-size: x-large;
  color: white;
`;

export const LinkStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  width: 100%;
  margin-top: 20px;
`;
export const BookingConfirmation = styled.div`
  display: flex;
  height: 39.5vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const BookingCard = styled.div`
  display: flex;
  text-align: center;
  width: 650px;
  height: 200px;
  flex-direction: row;
`;

export const BookingRow = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  margin-right: 10px;
`;
export const BookingRowReverse = styled(BookingRow)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
  flex-direction: column;
`;
export const CartButton = styled.button`
  height: 35px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  background-color: #e1b4bd;
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;
