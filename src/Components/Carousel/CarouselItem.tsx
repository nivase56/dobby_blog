import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';


interface CarouselItemProps {
  image: string;
  name: string;
  location: string;
  stars: number;
  review: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, name, location, stars, review }) => {
  return (
    <div className="carousel-item flex shadow-xl mx-5 mb-20 rounded-xl bg-white">
      <div style={{ width: '60%', padding: '5px' }}>
        <Image src={image} alt={name} className="carousel-item-image h-full object-cover rounded shadow-lg" />
      </div>
      <div style={{ width: '40%', padding: '20px 10px' }}>
        <h3 className="text-3xl font-semibold flex items-center gap-1">{stars}.0<span className="text-sm font-normal"> stars</span></h3>
        <Rate disabled allowHalf defaultValue={stars} />
        <p className="h-44 my-6 text-xs">{review}</p>
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-xs text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
