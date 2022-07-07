import styled from "styled-components";

export const BookingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 600px;
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
export const Availability = styled.div`
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
  background-color: var(--pink);
  border: 1px solid black;
`;
export const BookingOption = styled.option``;

export const BookingButton = styled.button`
  height: 40px;
  width: 45%;
  margin-left: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: var(--green);
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;

export const LinkStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  width: 100%;
  margin-top: 20px;
`;
