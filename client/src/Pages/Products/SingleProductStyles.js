import styled from "styled-components";

export const ProductCard = styled.div`
  /* height: 400px;
  width: 100%; */
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  margin-bottom: 100px;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  justify-content: center;
`;

// const ProductImg = styled.img`
export const ProductImg = styled.div`
  width: 100%;

  background-color: blue;

  min-width: 250px;

  max-width: 250px;
  max-height: 250px;
`;

export const ProductDescription = styled.div`
  /* display: flex;
  flex-flow: column;
  margin-left: 25px; */

  display: flex;
  flex: 1 1 auto;
  flex-flow: column;
  padding: 1rem 0;
`;

export const ProductName = styled.div`
  padding: 20px 0;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const ArrowContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  text-align: center;
  width: 35px;
  height: 30px;
  margin-left: 20px;
  border: 1px solid;
  border-radius: 5px;

  background-color: var(--grey);
`;

export const Arrows = styled.div`
  display: flex;
  flex-flow: column;
  /* font-size: 18px; */
  color: var(-green);

  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-flow: column;
`;

export const CartButton = styled.button`
  height: 50px;
  width: 65%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  background-color: var(--pink);
  border: none;
  font-weight: bold;
  margin: 10px 0;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;
