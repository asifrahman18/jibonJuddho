import React from "react";
import Contents from "./contents";

const EmployerSection = () => {
  return (
    <div className="relative mt-20 h-screen overflow-hidden">
      <section className="container z-10 grid grid-cols-1 items-center gap-10 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold md:text-4xl text-center">
      A Place Where Talent Meets Opportunity
      </h1>
      <Contents/>
      </section>
    </div>
  );
};

export default EmployerSection;
