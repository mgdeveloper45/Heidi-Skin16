import styled from "styled-components";

// Product Drop Down Styles

export const DropContainer = styled.div``;

export const MenuBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  /* font-size: 40px; */
`;
export const MenuPosition = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Menu = styled.div`
  text-align: center;
  /* font-size: 20px; */
  background-color: var(--pink);
  position: absolute;
  padding: 1rem;
  letter-spacing: 0.05rem;
  border-radius: 5px;
  z-index: 1;
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: black;
    :hover {
      color: gray;
    }
  }
`;
export const CategoryLinks = styled.div``;

// Products Page Styles

export const ProductWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
export const ProductBody = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
export const DropDown = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;
export const ProductGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto auto auto;
  column-gap: 30px;
  row-gap: 30px;
`;

// Single Product Styles

export const ProductCard = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin-bottom: 100px;
`;
export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ProductImg = styled.img`
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  max-height: 200px;
`;
export const ProductDescription = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 25px;
`;
export const ProductName = styled.div``;
export const ProductPrice = styled.div`
  display: flex;
`;
export const ArrowContainer = styled.div`
  display: flex;
`;
export const Input = styled.input`
  text-align: center;
  width: 30px;
  height: 25px;
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
  margin-left: 25px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;
