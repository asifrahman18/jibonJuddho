"use client";
import React from "react";
import Animation from "./animation";
import { motion } from "framer-motion";
import Contents from "./contents";

const Landing = () => {
  return (
    <>
      <motion.div
        className=" absolute top-0 left-0 w-full h-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Animation />
        <div className="fixed top-0 -z-10 h-full " />
        <div className="fixed bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full dark:bg-[#151f4dfd] opacity-50 blur-[80px] md:z-[-1] lg:z-[-1] z-[-5]" />
        <div className="absolute inset-0 -z-10 h-full items-center px-5 py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_10%,#121f6b_180%)]"></div>
      </motion.div>
      <motion.div>
        <Contents />
      </motion.div>
    </>
  );
};

export default Landing;
