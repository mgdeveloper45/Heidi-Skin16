import styled from "styled-components";

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem 2rem 7%;
  /* height: 796px; */
  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 75px;
  @media screen and (max-width: 769px) {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  /* height: 500px; */
  @media screen and (max-width: 600px) {
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
  border: 3px solid ${(props) => (props.border ? props.border : "white")};

  @media screen and (max-width: 600px) {
    align-self: center;
    width: 80%;
    padding-bottom: 80%;
    margin: 2rem;
  }
`;
export const Listing = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;
export const Price = styled.span`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;
export const SndPrice = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;
export const Description = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 250;
  font-size: 1.5rem;
  margin-bottom: 30px;
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
  }
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
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;
export const Button = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 75px;
  background: #0d6878;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 60px;
  }
`;
