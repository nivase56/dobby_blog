import React from "react";
import { Carousel, Row, Col } from "antd";
import IconComponent from "../../Common/IconComponent";
import Image from "next/image";
import SubHeading from "../../Common/SubHeading";
import ContentTag from "../../Common/ContentTag";
import car1 from "@/Images/volvo.png";
import car2 from "@/Images/jaguar.png";
import car3 from "@/Images/honda.png";
import car4 from "@/Images/audi.png";
import car5 from "@/Images/accord.png";


const steps = [
  {
    icon: "gis:location-poi",
    title: "Choose location",
    description: "Choose your and find your best car",
  },
  {
    icon: "solar:calendar-bold",
    title: "Book Wash",
    description: "Book your wash and time to book your car",
  },
  {
    icon: "fontisto:car",
    title: "Shine your car",
    description: "Book your car and we will deliver it directly to you",
  },
];

const images = [car3, car1, car2, car4, car5, car3, car1, car2, car4, car5, car3, car1, car2, car4, car5];

const CarouselComponent = () => {
  return (
    <div className="carousel-container overflow-hidden md:my-10">
      <Carousel autoplay autoplaySpeed={6000} dots={false} infinite speed={6000} slidesToShow={5} slidesToScroll={5} >
        {images.map((image, index) => (
          <div key={index} className="h-[50px] object-cover md:h-auto">
            <Image src={image} alt={`car-${index}`} height={150} width={150} className="p-2" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const BookingContainer = () => {
  return (
    <>
      <div className="p-4" style={{zIndex:"-20"}}>
        <ContentTag content="HOW IT WORKS" classNames="justify-center" />
        <div className="mt-4">
          <SubHeading content="Book with following 3 working steps" />
        </div>
        <div className="my-10 md:flex justify-center gap-20">
          {steps.map((step, index) => (
            <div key={index} className="w-full py-3 md:w-[14%] flex items-center flex-col">
              <div className="rounded-lg shadow-lg flex items-center justify-center h-24 bg-blue-100 w-24 mb-3">
                <IconComponent
                  icon={step.icon}
                  className="text-primary h-10 w-10 text-blue-500"
                />
              </div>
              <p className="font-semibold text-xl py-2">{step.title}</p>
              <p className="text-center text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CarouselComponent />
    </>
  );
};

export default BookingContainer;
