"use client";
import React from "react";
import Heading from "@/Components/Common/Heading";
import AppStore from "@/Images/appstore.png";
import PlayStore from "@/Images/googleplay.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeText = () => {

  return (
    <div className="flex flex-col lg:items-end md:w-1/2">
      <div>
      <Heading content="Book a Wash, " classNames="mt-3 h-12 md:h-16"/>
      <div className="flex h-12 md:h-16">  
        <Heading content="Get a Instant" />
        <motion.span
          className="ml-2 text-4xl md:text-5xl text-blue-500 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Shine{" "}
        </motion.span>
      </div>
      <div className="flex h-12 md:h-16" >
        <Heading content="at just" />

        <motion.span
          className="ml-3 text-5xl md:text-6xl text-blue-500 font-semibold text-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          ₹25
        </motion.span>
      </div>  

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block w-96 py-5 text-sm"
      >
        Get a car wash wherever and whenever you need it with your IOS and
        Android device.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden md:flex gap-4"
      >
        <Image src={AppStore} alt="app-store" className="shadow-lg" width={130} height={130} />
        <Image src={PlayStore} alt="play-store" className="shadow-lg" width={130} height={130}/>
      </motion.div>
      </div>
    </div>
  );
};

export default HomeText;
