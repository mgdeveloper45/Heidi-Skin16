import styled from "styled-components";

export const BookingConfirmation = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ConfirmationCard = styled.div`
  display: flex;
  text-align: center;
  width: 650px;
  padding-bottom: 50px;
  flex-direction: ${(props) => props.flexDirection || "column"};
  line-height: ${(props) => props.lineHeight || "none"};
`;

export const ConfirmationRow = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  margin-right: 10px;
`;
export const ConfirmationRowReverse = styled(ConfirmationRow)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
  flex-direction: column;
  line-height: 40px;
`;

export const Directions = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 125px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  background-color: var(--pink);
  border: none;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;
