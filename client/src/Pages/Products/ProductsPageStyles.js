import styled from "styled-components";

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
