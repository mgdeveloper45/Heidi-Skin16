import React from "react";
import {
  GalleryContainer,
  GalleryHead,
  GalleryHeader,
  GalleryImageContainer,
  GalleryImage,
} from "./GalleryStyles";

  import { data } from "./GalleryData";
  const Gallery = () => {
    return (
      <>
        <GalleryContainer>
          <GalleryHead>
            <GalleryHeader>Gallery</GalleryHeader>
          </GalleryHead>
          <GalleryImageContainer>
            {data.map((img, index) => (
              <div key={index}>
                <GalleryImage image={img} />
              </div>
              ))}
              </GalleryImageContainer>
        </GalleryContainer>
      </>
  );
};

export default Gallery;
