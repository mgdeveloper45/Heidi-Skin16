import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
  margin-top: 100px;
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
  margin: 52px;
`;
export const GalleryImageContainer = styled.div`
  display: flex;
  width: 100vw;
  /* width: auto; */
  /* height: 610px; */
  height: 710px;
  background-color: white;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 10px 0 30px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;


export const GalleryImage = styled.div`
  background-image: url(${(props) => props.image});
  box-shadow: 4px 4px 4px rgba(92, 36, 46, 0.75);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  margin: 0 10px 0 10px;
  height: 550px;
  width: 375px;
  border-radius: 8px;
  scroll-behavior: smooth;

  /* height: 456px;
    width: 379px;
    suggested size */
`;
