import React from 'react';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        nextArrow: <div className="slick-arrow slick-next">→</div>,
        prevArrow: <div className="slick-arrow slick-prev">←</div>,
      };

  return (
    <div className="carousel-container overflow-hidden">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default Carousel;
