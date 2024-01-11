'use client'
import { slideIn } from '@/lib/motion'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const Contents = () => {
  return (
    <motion.div 
    animate="show" 
    initial="hidden"
    variants={slideIn("left", "tween", 0.2, 1.5)}
    className='mt-[23rem] ml-[10rem]'>
      <h1 className='text-6xl'>Your Gateway to Career Excellence</h1>
      <h4 className='pt-10 w-[55rem] text-2xl'>Step into a world of possibilities where career excellence is within reach. Discover exciting opportunities across the nation and propel your professional journey forward. Whether you seek jobs, internships, or training programs, our platform is designed to empower your ambitions</h4>
      <div className='pt-10 ml-[23rem]'>
      <Link href="/pages/signIn"><Button >Start Exploring</Button></Link>
      </div>
    </motion.div>
  )
}

export default Contents
