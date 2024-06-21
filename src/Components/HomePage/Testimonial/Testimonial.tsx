"use client";
import React from "react";
import leftQuote from "@/Images/leftquote.png";
import rightQuote from "@/Images/rightquote.png";
import Image from "next/image";
import Heading from "../../Common/Heading";
import Carousel from "@/Components/Carousel/Carousel";
import personImage from "@/Images/personImage.png"
import ContentTag from "../../Common/ContentTag";

const Testimonial = () => {
  const data = [
    {
      image: personImage,
      name: "John Doe",
      location: "New York",
      stars: 4,
      review: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
    },
    {
      image: personImage,
      name: "Jane Smith",
      location: "Los Angeles",
      stars: 5,
      review: "Highly recommended!",
    },
    {
        image: personImage,
        name: "John Doe",
        location: "New York",
        stars: 4,
        review: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
      },
      {
        image: personImage,
        name: "Jane Smith",
        location: "Los Angeles",
        stars: 5,
        review: "Highly recommended!",
      },
      {
        image: personImage,
        name: "John Doe",
        location: "New York",
        stars: 4,
        review: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
      },
      {
        image: personImage,
        name: "Jane Smith",
        location: "Los Angeles",
        stars: 5,
        review: "Highly recommended!",
      },
    // Add more data objects as needed
  ];

  

  return ( 
    <div className="bg-blue-50">
      <div className="flex justify-evenly">
        <div className="flex items-center gap-5">
          <Image
            src={leftQuote}
            alt="left quote"
            className="hidden md:block w-[350px] h-[350px] py-4"
            width={200}
            height={150}
          />
          <div>
            
            <ContentTag content="POPULAR WASHING DEALS" classNames="justify-center py-5" />
            <h1 className="text-3xl font-semibold px-6 py-2 md:px-0 md:py-0">
              What people say about us?
            </h1>
          </div>
        </div>
        <Image
          src={rightQuote}
          alt="left quote"
          className="w-[150px] h-[100px]"
          width={200}
          height={150}
        />
      </div>
      <div className="mt-[0px] md:mt-[-90px]">
      <Carousel items={data} />
      </div>
    </div>
  );
};

export default Testimonial;
