"use client";
import Lottie from "lottie-react";
import animationData from "../../../assets/animation1.json";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Test() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      className=""
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <div className="w-[280px] h-auto lg:w-full">
        <Lottie animationData={animationData} />
      </div>
    </motion.div>
  );
}

export default Test;
