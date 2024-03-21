"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/animation2.json";
import { slideIn } from "@/lib/motion";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Test() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      animate="show"
      initial="hidden"
      variants={slideIn("right", "tween", 0.2, 1)}
      className="order-2 md:order-1"
    >
      <div className="w-[300px] lg:w-full">
        <Lottie animationData={animationData} />
      </div>
    </motion.div>
  );
}

export default Test;
