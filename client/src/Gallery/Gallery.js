import React, { useState, useEffect } from "react";
import {
  GalleryContainer,
  GalleryHead,
  GalleryHeader,
  GalleryImageContainer,
  GarlleryImage,
} from "./GalleryStyles";

import { data } from "./GalleryData";
const Gallery = () => {
  console.log(data);
  const [currentImageIndex] = useState(0);

  useEffect(() => {}, [currentImageIndex]);

  return (
    <>
      <GalleryContainer>
        <GalleryHead>
          <GalleryHeader>Gallery</GalleryHeader>
        </GalleryHead>
        <GalleryImageContainer>
          {data.map((img, index) => (
            <GarlleryImage key={index} src={img} />
          ))}
        </GalleryImageContainer>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
