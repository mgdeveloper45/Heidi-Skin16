import React from "react";
import {
  GalleryContainer,
  GalleryHead,
  GalleryHeader,
  GalleryImageContainer,
  GalleryImage,
} from "./GalleryStyles";
import { data } from "./GalleryData";

import About from "../About/About";
const Gallery = () => {
  console.log(data);

  return (
    <>
      <GalleryContainer>
        <GalleryHead>
          <GalleryHeader>Gallery</GalleryHeader>
        </GalleryHead>
        <GalleryImageContainer>
          {data.map((img, index) => (
            <GalleryImage key={index} src={img} />
          ))}
        </GalleryImageContainer>
      </GalleryContainer>
      <About />
    </>
  );
};

export default Gallery;
