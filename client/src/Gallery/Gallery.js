import React from "react";
import {
  GalleryContainer,
  GalleryHead,
  GalleryHeader,
  GalleryImageContainer,
  GalleryImage,
} from "./GalleryStyles";

import { galleryData } from "./GalleryData";
const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <GalleryHead>
          <GalleryHeader>Gallery</GalleryHeader>
        </GalleryHead>
        <GalleryImageContainer>
          {galleryData.map((img, index) => (
            <div key={index}>
              <GalleryImage image={img.image} />
            </div>
          ))}
        </GalleryImageContainer>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
