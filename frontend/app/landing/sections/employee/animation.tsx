"use client";
import Lottie from "lottie-react";
import animationData from "../../../assets/animation1.json";

function Test() {
  return (
    <div className="">
      <div className="w-[280px] h-auto lg:w-full">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}

export default Test;
