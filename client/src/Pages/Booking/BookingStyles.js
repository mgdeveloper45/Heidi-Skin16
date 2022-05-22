import styled from "styled-components";

export const BookingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-bottom: 50px;
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
  height: 100%;
  width: 780px;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  gap: 25px;

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
