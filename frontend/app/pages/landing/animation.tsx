'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/animation2.json'
import { motion } from "framer-motion"
import { slideIn } from "../../../lib/motion"

//https://dev.to/franklin030601/how-to-use-lottie-animations-react-js-cn0#9

function Animation() {
  return (
    <motion.div animate="show"
    initial="hidden"
    variants={slideIn("right", "tween", 0.2, 1.5)}
    className="order-2 md:order-1 float-right mt-[18rem] mr-[18rem]">
    <div className=''>
      <Lottie style={{ height: '400px', width: '400px' }} animationData={animationData} />
    </div>
    </motion.div>

  )
}

export default Animation
