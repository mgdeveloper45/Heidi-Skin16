import styled from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;
export const H3 = styled.h3`
  font-style: normal;
  font-weight: 400;
  /* font-size: 30px; */
  margin: 10px;
`;
export const Directions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 265px;
  background-color: var(--pink);
  text-decoration: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  background-color: var(--pink);
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;
export const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 165px;
  width: 335px;
`;
export const P = styled.p`
  font-style: normal;
  font-weight: 400;
  /* font-size: 25px; */
  margin: 0;
  padding: 10px 0;
`;
export const GetDirections = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: var(--green);
  }
`;
