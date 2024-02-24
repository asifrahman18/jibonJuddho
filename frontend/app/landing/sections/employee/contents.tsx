import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";
import { HoverEffect } from "@/components/ui/animateHover";

const Contents = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-extrabold md:text-4xl text-center">
          Elevate Your Career With Us
        </h1>
        <div className="pt-6">
        <HoverEffect items={contents}/>
        </div>
      </div>
    </>
  );
};


export const contents = [
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 1
  },
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 2
  },
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 3
  },
  {
    title: "Diverse Opportunities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatibus nulla eum debitis dolorum repellendus assumenda similique inventore dolor itaque? Quasi vel non dolorem fugiat iusto recusandae dolorum eaque, ex dicta?",
    id: 4
  },
];

export default Contents;
