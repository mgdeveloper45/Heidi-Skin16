import styled from "styled-components";

export const AddON = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const AddOnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) =>
    props.bgColor ? "rgba(216, 155, 166, 0.75)" : "rgba(13, 104, 120, 0.75)"};
`;
export const Price = styled.span`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  margin-right: 10px;
`;
export const Title = styled.div`
  color: ${(props) => (props.color ? "black" : "#fff")};

  margin-bottom: ${(props) => props.mb && props.mb};
  width: 550px;
  font-family: Helvetica Neue;
  font-weight: 350;
  font-style: normal;
  font-size: 80px;
`;
export const Image = styled.div`
  width: 596px;
  height: 696px;
  z-index: 10;
  margin-top: -25px;
  background-color: red;
  backdrop-filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
`;
export const ServiceTitleWrap = styled.div``;
export const ServiceTitle = styled.h1`
  display: flex;
`;
