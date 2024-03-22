'use client'
import { HoverEffect } from "@/components/ui/animateHover";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Contents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <motion.div
        className=""
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <h1 className="text-3xl font-extrabold md:text-4xl text-center">
          Elevate Your Career With Us
        </h1>
        <div className="pt-6">
          <HoverEffect items={contents} />
        </div>
      </motion.div>
    </>
  );
};

export const contents = [
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 1,
  },
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 2,
  },
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 3,
  },
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 4,
  },
];

export default Contents;
