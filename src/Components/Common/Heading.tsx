"use client"
import React from 'react'
import { MotionValue, motion } from 'framer-motion';
const Heading = ({content, classNames} : any) => {

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  

  
  return (

    <motion.h1 initial="hidden" animate="visible" variants={sentence} 
    className={`text-4xl md:text-5xl font-semibold block ${classNames}`} >
        {content.split("").map((char: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | MotionValue<number> | MotionValue<string> | null | undefined, index: React.Key | null | undefined) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    
  )
}

export default Heading

