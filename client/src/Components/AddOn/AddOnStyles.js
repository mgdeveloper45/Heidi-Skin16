import styled from "styled-components";

export const AddON = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-bottom: 75px;
  }
`;
export const AddOnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props =>
    props.bgColor ? "rgba(216, 155, 166, 0.75)" : "rgba(13, 104, 120, 0.75)"};
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Price = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  margin-right: 10px;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const Title = styled.div`
  color: ${props => (props.color ? "black" : "#fff")};
  margin-top: 200px;
  margin-bottom: 40%;
  width: 50%;

  font-weight: 350;
  font-style: normal;
  font-size: 80px;
  @media screen and (max-width: 1200px) {
    font-size: 65px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }
  @media screen and (max-width: 600px) {
    margin: 50px 0px;
  }
`;
export const Image = styled.div`
  width: 40%;
  position: relative;
  height: 0;
  padding-bottom: 40%;
  z-index: 10;
  transform: translateY(-1rem);
  backdrop-filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  background-image: url(${props => props.image});
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${props => (props.border ? props.border : "white")};
  @media screen and (max-width: 600px) {
    width: 80%;
    padding-bottom: 80%;
    margin-bottom: 2rem;
  }
`;
export const ServiceTitleWrap = styled.div``;
export const ServiceTitle = styled.h1`
  display: flex;
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;
