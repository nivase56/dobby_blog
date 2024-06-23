"use client"
import React from "react";
import AppointmentContainer from "@/Components/HomePage/HeroSection/Atoms/AppointmentContainer";
import BookingContainer from "../HomePage/HowItWork/BookingContainer";
import OfferContainer from "../HomePage/WhyChooseUs/OfferContainer";
import PopularWashing from "../HomePage/PopularWashingDetails/PopularWashing";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import DownloadApp from "../HomePage/DownloadApp/DownloadApp";
import Footer from "@/Components/Common/Footer";
import CopyRight from "../Common/CopyRight";
import HeroContainer from "../HomePage/HeroSection/HeroContainer";

const HomePage = () => {

  return (
    <div className="h-full w-full container mx-auto">
      <HeroContainer/>
      <AppointmentContainer/>
      <BookingContainer/>
      <OfferContainer/>
      <PopularWashing/>
      <Testimonial/>
      <DownloadApp/>
      <Footer/>
      <CopyRight/>
    </div>
  );
};

export default HomePage;
