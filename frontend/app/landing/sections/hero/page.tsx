"use client";
import Animation from "./animation";
import Contents from "./contents";

const HeroSection = () => {
  return (
    <section className="container min-h-screen  grid grid-cols-1 justify-between items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <Contents />
      <Animation />
    </section>
  );
};

export default HeroSection;
