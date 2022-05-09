import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
`;
export const GalleryHead = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const GalleryHeader = styled.h1`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  padding-bottom: 52px;
`;
export const GalleryImageContainer = styled.div`
  display: flex;
  width: auto;
  height: 610px;
  background-color: white;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const GarlleryImage = styled.img`
  background-color: white;
  margin: 0 10px 0 10px;
  height: 567px;
  width: 500px;
  border-radius: 5px;
  scroll-behavior: smooth;

  /* height: 456px;
    width: 379px;
    suggested size */
`;
