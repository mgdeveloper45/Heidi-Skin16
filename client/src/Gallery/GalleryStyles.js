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
  overflow-y: hidden;
  margin-bottom: 50px;
  padding: 0px 20px 20px 20px;
  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--pink);
    border-radius: 50px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
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
