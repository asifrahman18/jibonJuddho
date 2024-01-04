'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/animation1.json'

//https://dev.to/franklin030601/how-to-use-lottie-animations-react-js-cn0#9

function Test() {
  return (
    <div className=''>
      <Lottie style={{ height: '300px', width: '300px' }} animationData={animationData} />
    </div>
  )
}

export default Test
