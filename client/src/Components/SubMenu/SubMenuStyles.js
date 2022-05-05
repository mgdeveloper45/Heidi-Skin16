import styled from "styled-components";

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem 2rem 7%;
  /* height: 796px; */
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 500px;
`;
export const Image = styled.div`
  background-color: blue;
  border-radius: 20px;
  position: relative;
  width: 40%;
  height: 0;
  padding-bottom: 40%;
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
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
  }
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
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 75px;
  margin-right: 10%;
  margin-bottom: 7%;
  background: #0d6878;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 60px;
    margin-bottom: 4%;
    transform: translateY(-50px);
  }
`;
