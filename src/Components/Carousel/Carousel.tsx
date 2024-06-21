import React from 'react';
import { Carousel as AntCarousel } from 'antd';
import CarouselItem from './CarouselItem';

interface CarouselProps {
  items: {
    image: any;
    name: string;
    location: string;
    stars: number;
    review: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items per slide
    slidesToScroll: 1, // Scroll 1 item at a time
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Adjust to show 2 items per slide on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Adjust to show 1 item per slide on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container overflow-hidden">
      <AntCarousel {...settings}>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            image={item.image}
            name={item.name}
            location={item.location}
            stars={item.stars}
            review={item.review}
          />
        ))}
      </AntCarousel>
    </div>
  );
};

export default Carousel;
