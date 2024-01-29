'use client'
import Lottie from "lottie-react";
import animationData from "../../../assets/animation1.json";

function Animation() {
  return (
    <div className="w-[280px] h-auto lg:w-full">
      <Lottie animationData={animationData} />
    </div>
  );
}

export default Animation;
