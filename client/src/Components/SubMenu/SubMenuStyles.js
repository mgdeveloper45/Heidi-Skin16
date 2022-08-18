import styled from "styled-components";

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem 2rem 7%;
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 75px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Image = styled.div`
  border-radius: 20px;
  position: relative;
  width: 40%;
  height: 0;
  padding-bottom: 40%;
  /* box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25); */
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid ${(props) => (props.border ? props.border : "var(--white)")};

  @media screen and (max-width: 768px) {
    align-self: center;
    width: 80%;
    padding-bottom: 80%;
    margin: 2rem;
  }
`;
export const Listing = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  display: flex;
  align-self: center;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
export const Price = styled.h6`
  margin: 1rem;
`;
export const Time = styled(Price)``;
export const SndPrice = styled.p``;

export const Description = styled.div`
  margin: 2rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const P = styled.p`
  font-style: normal;
  font-weight: 500;
  color: var(--white);
`;
export const Button = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 75px;
  background-color: var(--green);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
`;
