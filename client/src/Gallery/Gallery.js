import React, { useState, useEffect } from "react";
import {
  Galleries,
  GalleryContainer,
  GalleryHead,
  GalleryHeader,
  GalleryImageContainer,
  GalleryImage,
  // StyledArrowContainer,
} from "./GalleryStyles";
// import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import { data } from "./GalleryData";
const Gallery = () => {
  console.log(data);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {}, [currentImageIndex]);

  // const nextImage = () => {
  //   console.log("next");
  //   setCurrentImageIndex((prevIndex) => prevIndex + 1);
  // };

  // const preImage = () => {
  //   console.log("prev");
  //   setCurrentImageIndex((prevIndex) => prevIndex - 1);
  // };
  return (
    <>
      <GalleryContainer>
        <GalleryHead>
          <GalleryHeader>Gallery</GalleryHeader>
        </GalleryHead>
        {/*left arrow*/}
        <GalleryImageContainer>
          {data.map((img, index) => (
            <GalleryImage key={index} src={img} />
          ))}
        </GalleryImageContainer>
      </GalleryContainer>

      {/*currentImageIndex !== 0 && (
        <StyledArrowContainer>
          <TiArrowSortedDown onClick={preImage} />
        </StyledArrowContainer>
      )*/}
      {/*currentImageIndex !== data.length - 1 && (
            <StyledArrowContainer>
              <TiArrowSortedUp onClick={nextImage} />
              
            </StyledArrowContainer>
          )*/}
    </>
  );
};

export default Gallery;
