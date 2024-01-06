'use client'
import React from 'react'
import Test from '@/app/components/test'
import {motion} from 'framer-motion'

const Landing = () => {
  return (
    <motion.div className=' absolute top-0 left-0 w-full h-full'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1, ease:'easeOut'}}>
      <Test/>
    </motion.div>
  )
}

export default Landing
