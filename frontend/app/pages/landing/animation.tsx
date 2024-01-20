//'use client'
import Lottie from 'lottie-react'
import animationData from '../../assets/animation2.json'


function Animation() {
  return (
    <div className="hidden lg:block lg:order-2 md:order-1 lg:float-right lg:mt-[18rem] lg:mr-[10rem]">
    <div>
      <Lottie style={{ height: '400px', width: '400px' }} animationData={animationData} />
    </div>
    </div>

  )
}

export default Animation
