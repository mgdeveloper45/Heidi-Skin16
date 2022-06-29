import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
export const GalleryHead = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GalleryHeader = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  margin: 52px;
`;
export const GalleryImageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 710px;
  background-color: white;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 10px 0 30px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const GalleryImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  margin: 0 10px 0 10px;
  height: 550px;
  width: 375px;
  border-radius: 8px;
  scroll-behavior: smooth;
`;
