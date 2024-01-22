//'use client'
import Lottie from 'lottie-react'
import animationData from '../../../../assets/animation1.json'


function Animation() {
  return (
    <div className="float-left">
    <div>
      <Lottie style={{ height: '400px', width: '400px' }} animationData={animationData} />
    </div>
    </div>

  )
}

export default Animation
