import React from "react";
import audirs from "@/Images/audirs.png";
import Image from "next/image";
import IconComponent from "../../Common/IconComponent";
import ContentTag from "../../Common/ContentTag";
import { motion } from "framer-motion";

const offerItems = [
  {
    icon: "ri:money-dollar-circle-fill",
    title: "Best price guaranteed",
    description:
      "Find a lower price? We’ll refund you 100% of the difference.",
  },
  {
    icon: "ic:sharp-person",
    title: "Experience worker",
    description:
      "Don’t have driver? Don’t worry, we have many experienced driver for you.",
  },
  {
    icon: "subway:calendar-2",
    title: "Best price guaranteed",
    description:
      "Find a lower price? We’ll refund you 100% of the difference.",
  },
  {
    icon: "mage:we-chat",
    title: "24/7 technical support",
    description:
      "Have a question? Contact Washcars support any time when you have problem.",
  },
];

const OfferContainer = () => {
  return (
    <div className="block mt-10 md:flex md:mt-24 gap-4">
      <div className="md:w-1/2">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        
      >
        <Image src={audirs} alt="audirs" width={630} quality={100}/>
        </motion.div>
      </div>
      <div className="px-10 flex flex-col items-center md:block"> 
        <ContentTag content="WHY CHOOSE US" />
        <div>
          <h1 className="text-4xl w-full font-medium md:w-2/3 my-8">
            We offer the best experience with washing service
          </h1>
        </div>
        {offerItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 md:h-24 md:gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-blue-100 p-4 rounded-lg shadow-md my-5 md:my-0 ">
              <IconComponent
                icon={item.icon}
                className="text-primary h-9 w-9 text-blue-500"
              />
            </div>
            <div>
              <h1 className="font-semibold text-sm md:text-xl">{item.title}</h1>
              <p className="w-3/4 text-xs md:text-sm my-1 text-gray-500">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OfferContainer;
