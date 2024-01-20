//'use client'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const Contents = () => {
  return (
    <div className='lg:mt-[23rem] lg:ml-[10rem]'>
      <h1 className='lg:test-3xl xl:text-6xl'>Your Gateway to Career Excellence</h1>
      <h4 className='lg:pt-10 lg:w-[55rem] lg:text-2xl'>Step into a world of possibilities where career excellence is within reach. Discover exciting opportunities across the nation and propel your professional journey forward. Whether you seek jobs, internships, or training programs, our platform is designed to empower your ambitions</h4>
      <div className='flex lg:pt-10 lg:ml-[23rem]'>
      <Button>Start Exploring</Button>
      </div>
    </div>
  )
}

export default Contents
