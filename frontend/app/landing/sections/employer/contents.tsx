import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10"
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
    >
      <Card>
        <CardContent className="p-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus, pariatur veritatis numquam possimus corporis blanditiis
          nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at
          ut aliquam soluta animi?
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus, pariatur veritatis numquam possimus corporis blanditiis
          nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at
          ut aliquam soluta animi?
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus, pariatur veritatis numquam possimus corporis blanditiis
          nemo est ducimus nesciunt praesentium, quisquam minima fugit ullam at
          ut aliquam soluta animi?
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Contents;
