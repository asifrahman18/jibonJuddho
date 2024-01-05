'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/animation1.json'
import { motion } from "framer-motion"
import { slideIn } from "../../lib/motion"

//https://dev.to/franklin030601/how-to-use-lottie-animations-react-js-cn0#9

function Test() {
  return (
    <motion.div animate="show"
    initial="hidden"
    variants={slideIn("left", "tween", 0.2, 1.5)}
    className="order-2 md:order-1">
    <div className='mt-10'>
      <Lottie style={{ height: '300px', width: '300px' }} animationData={animationData} />
    </div>
    </motion.div>

  )
}

export default Test
