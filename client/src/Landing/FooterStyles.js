import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  /* width: 100vw; */
  height: 500px;
  background: rgba(223, 213, 177, 0.5);
`;
export const Declaration = styled.div`
  display: flex;
  justify-content: space-around;
  /* width: 100vw; */
`;
export const UL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  /* height: 325px; */
  width: 165px;
`;
export const LI = styled.h1`
  list-style: none;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  &:hover {
    text-decoration: underline;
  }
`;
export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 385px;
  /* height: 325px; */
`;
export const HR = styled.hr`
  align-self: center;
  border: 2px solid #000;
  width: 85vw;
`;

export const Foot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 150px; */
  width: 100%;
  /* margin-top: 0;
    border: none;
    background-color: rgba(223, 213, 177, 0.5); */
`;
export const NAME = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
`;
export const Rights = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;
export const Social = styled.div``;
export const Span = styled.span`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 200;
  font-size: 100px;
`;
