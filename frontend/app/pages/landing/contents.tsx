//'use client'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const Contents = () => {
  return (
    <div className='mt-[23rem] ml-[10rem]'>
      <h1 className='text-6xl'>Your Gateway to Career Excellence</h1>
      <h4 className='pt-10 w-[55rem] text-2xl'>Step into a world of possibilities where career excellence is within reach. Discover exciting opportunities across the nation and propel your professional journey forward. Whether you seek jobs, internships, or training programs, our platform is designed to empower your ambitions</h4>
      <div className='pt-10 ml-[23rem]'>
      <Link href="/pages/signIn"><Button >Start Exploring</Button></Link>
      </div>
    </div>
  )
}

export default Contents
