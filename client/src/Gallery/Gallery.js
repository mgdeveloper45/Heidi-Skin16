import React from 'react'
import { 
    Galleries, GalleryContainer, 
    GalleryHead, GalleryHeader, 
    GalleryImage 
} from './GalleryStyles'

const Gallery = () => {
    return (
        <GalleryContainer>
            <GalleryHead>
                <GalleryHeader>Gallery</GalleryHeader>
            </GalleryHead> 
            <Galleries>
                <GalleryImage></GalleryImage>
            </Galleries> 
        </GalleryContainer>
    )
}

export default Gallery
