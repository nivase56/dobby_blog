import React from 'react'
import HomeText from './Atoms/HomeText'
import { motion } from "framer-motion";

import bluePorsche from "@/Images/blueporsche.png"
import Image from "next/image";

const HeroContainer = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row  justify-center items-center h-[90%] mt-20 px-1 md:px-0">
      <HomeText/>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className='md:w-1/2 flex flex-col items-end'
        >
          
      <Image src={bluePorsche} alt="blue-porsche" width={670} />
      </motion.div>

      </div>
  )
}

export default HeroContainer
