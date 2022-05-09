import styled from "styled-components";

export const CartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  display: flex;
  justify-content
`;

export const CartContainer = styled.div`
  border: 1px solid red;
`;

export const Break = styled.div`
  border: 1px solid #e2b4bc;
  width: 80%;
`;

export const ImgContainer = styled.div`
  min-width: 150px;
  /* min-height: 215px; */
  max-width: 200px;
  max-height: 200px;
  height: 100%;
  width: 100%;
`;
export const CartImg = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(https://picsum.photos/400);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-flow: column;
`;
