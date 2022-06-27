import styled from "styled-components";

export const CartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  display: flex;
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
  max-width: 200px;
  max-height: 200px;
  height: 100%;
  width: 100%;
`;
export const CartImg = styled.img`
  height: 100%;
  width: 100%;
  background-image: url("https://picsum.photos/400");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-flow: column;
`;

export const CartButton = styled.button`
  height: 40px;
  width: 130px;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  background-color: rgba(216, 155, 166, 0.75);
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;

export const styledObj = {
  cartTotalCheckoutContainer: {
    maxHeight: "240px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "sticky",
    top: "50px",
    border: "1px solid #E2B4BD",
    borderRadius: "5px",
    padding: "0 20px",
    backgroundColor: "#EFEAD8",
  },
};
