import React from "react";
import Contents from "./contents";

const EmployerSection = () => {
  return (
    <section className="container mt-10 md:my-[20rem]">
      <h1 className="text-xl lg:text-3xl font-extrabold md:text-2xl mb-5 text-center">
        A Place Where Talent Meets Opportunity
      </h1>
      <Contents />
    </section>
  );
};

export default EmployerSection;
