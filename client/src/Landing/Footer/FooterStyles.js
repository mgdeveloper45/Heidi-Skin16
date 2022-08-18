import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 200px;
  background-color: var(--gold);
`;
export const Declaration = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const UL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  width: 165px;
`;
export const LI = styled.h3`
  list-style: none;

  font-style: normal;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;
export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 385px;
`;
export const HR = styled.hr`
  align-self: center;
  border: 2px solid #000;
  width: 85%;
`;

export const Foot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
`;
export const NAME = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 768px) {
    font-size: 40px;
    font-weight: 700;
  } */
`;

export const HeaderSkinny = styled.h3`
  font-style: normal;
  font-weight: 100;
`;
export const Rights = styled.div`
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;
export const Social = styled.div`
  width: 231px;
  /* @media (max-width: 768px) {
    margin: 20px;
  } */
`;
export const Span = styled.span``;
