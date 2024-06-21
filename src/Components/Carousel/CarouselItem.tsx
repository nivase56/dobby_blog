import React from 'react';
import Image from 'next/image';
import IconComponent from '../Common/IconComponent';

interface CarouselItemProps {
  image: any;
  name: string;
  location: string;
  stars: number;
  review: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, name, location, stars, review }) => {
  const starIcons = Array.from({ length: stars }, (_, index) => (
    <IconComponent
      key={index}
      icon="ic:outline-star"
      className="text-yellow-400 h-4 w-4 mr-1 text-shadow-md"
    />
  ));

  return (
    <div className="carousel-item flex shadow-xl mx-5 mb-20 rounded-xl bg-white">
      <div className='w-[60%] p-5'>
        <Image src={image} alt={name} className="carousel-item-image h-full object-cover rounded shadow-lg"/>
      </div>
      <div className='w-[40%] py-5'>
        <h3 className='text-3xl font-semibold flex items-center gap-1'>{stars}.0<span className='text-sm font-normal'> stars</span></h3>
        <div className='flex items-center py-1'>{starIcons}</div>
        <p className='h-44 my-6 text-xs'>{review}</p>
        <p className='text-xl font-semibold'>{name}</p>
        <p className='text-xs text-gray-500'>{location}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
