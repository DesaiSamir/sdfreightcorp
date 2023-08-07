import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            {images.map((imageUrl, index) => (
                <div key={index} style={{ width: '100%', height: '30vh' }}>
                    <img src={imageUrl} alt={`${index + 1}`} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
