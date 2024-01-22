import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const Contents = () => {
  return (
    <div className='pt-6 grid grid-cols-3 gap-10'>
      <Card>
        <CardContent className='pt-6 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus, pariatur veritatis numquam possimus corporis blanditiis nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at ut aliquam soluta animi?
        </CardContent>
      </Card>
      <Card>
        <CardContent className='pt-6 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus, pariatur veritatis numquam possimus corporis blanditiis nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at ut aliquam soluta animi?
        </CardContent>
      </Card>
      <Card>
        <CardContent className='pt-6 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus, pariatur veritatis numquam possimus corporis blanditiis nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at ut aliquam soluta animi?
        </CardContent>
      </Card>
    </div>
  )
}

export default Contents
