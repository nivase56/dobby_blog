import React from "react";
import PopularWashingCard from "./Atoms/PopularWashingCard";
import jagur from "@/Images/jaquar.png";
import audir8 from "@/Images/audir8.png";
import bmwm3 from "@/Images/bmw3.png";
import lamborgini from "@/Images/lamborgini.png"
import IconComponent from "@/Components/Common/IconComponent";
import ContentTag from "../../Common/ContentTag";

const PopularWashing = () => {
  const carData = [
    {
      name: "Jaguar XE L P250",
      rating: 4.8,
      count: 2436,
      passengers: 4,
      doors: 4,
      price: 25,
      imgsrc: jagur,
    },
    {
      name: "Audi R8",
      rating: 4.6,
      count: 1936,
      passengers: 4,
      doors: 4,
      price: 30,
      imgsrc: audir8,
    },
    {
      name: "BMW M3",
      rating: 4.5,
      count: 2036,
      passengers: 4,
      doors: 4,
      price: 35,
      imgsrc: bmwm3,
    },
    {
      name: "Lamborghini Huracan",
      rating: 4.3,
      count: 2236,
      passengers: 4,
      doors: 4,
      price: 40,
      imgsrc: lamborgini,
    },
  ];

  const data = [
  {
    image: 'https://example.com/image1.jpg',
    name: 'John Doe',
    location: 'New York',
    stars: 4,
    review: 'Great experience!',
  },
  {
    image: 'https://example.com/image2.jpg',
    name: 'Jane Smith',
    location: 'Los Angeles',
    stars: 5,
    review: 'Highly recommended!',
  },
  // Add more data objects as needed
];

  return (
    <div className="mt-10">
      <ContentTag content="POPULAR WASHING DEALS" classNames="justify-center pb-6"/>
      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold text-center md:text-start">
          Our popular car washing deals
        </h1>
      </div>

      <div className="md:flex items-center justify-center">
        {carData.map((car, index) => (
          <PopularWashingCard key={index} data={car} />
        ))}
      </div>
      <div className="flex justify-center items-center h-16 mb-10">
        <button className="py-3 px-10 border rounded-md flex items-center">Show all vehicles <IconComponent
          icon="tabler:arrow-right"
          className="text-primary h-5 w-5 mt-[2px] mx-3 text-gray-700"
        /></button>
      </div>
    </div>
  );
};

export default PopularWashing;
