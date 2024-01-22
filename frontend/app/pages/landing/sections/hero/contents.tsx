//'use client'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const Contents = () => {
  return (
    <>
    <div className='flex max-w-[980px] flex-col items-start gap-2'>
      <h1 className='text-3xl font-extrabold leading-tight md:text-4xl'>Your Gateway to Career Excellence</h1>
      <p className='max-w-[700px] text-lg text-muted-foreground'>Step into a world of possibilities where career excellence is within reach. Discover exciting opportunities across the nation and propel your professional journey forward. Whether you seek jobs, internships, or training programs, our platform is designed to empower your ambitions</p>
    </div>
      <div className='mt-4 flex gap-4'>
      <Button><Link href={'../../pages/signIn'}>Start Exploring</Link></Button>
      </div>
    </>
  )
}

export default Contents
