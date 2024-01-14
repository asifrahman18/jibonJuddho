//'use client'
import Lottie from 'lottie-react'
import animationData from '../../assets/animation2.json'


function Animation() {
  return (
    <div className="order-2 md:order-1 float-right mt-[18rem] mr-[18rem]">
    <div>
      <Lottie style={{ height: '400px', width: '400px' }} animationData={animationData} />
    </div>
    </div>

  )
}

export default Animation
