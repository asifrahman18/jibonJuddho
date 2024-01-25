//'use client'
import Lottie from "lottie-react";
import animationData from "../../../../assets/animation2.json";

function Animation() {
  return (
    <div className="w-[300px]  lg:w-full">
      <Lottie animationData={animationData} />
    </div>
  );
}

export default Animation;
