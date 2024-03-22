'use client'
import React from "react";
import Contents from "./contents";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const EmployerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      className="container mt-10 md:my-[20rem]"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <h1 className="text-xl lg:text-3xl font-extrabold md:text-2xl mb-5 text-center">
        A Place Where Talent Meets Opportunity
      </h1>
      <Contents />
    </motion.section>
  );
};

export default EmployerSection;
