"use client";
import Animation from "./animation";
import Contents from "./contents";

const HeroSection = () => {
  return (
    <div>
      <div className="relative mt-20 overflow-hidden">
        <section className="container z-10 grid grid-cols-1 items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:py-10">
          <div className="order-2 md:order-1">
          <Contents />
          </div>
          <div className="hidden md:block order-1 h-full md:order-2">
          <Animation />
          </div>
        </section>
      </div>
      <div>
        <div className="bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full dark:bg-[#19154d9f] opacity-50 blur-[80px] md:z-[-1] lg:z-[-1] z-[-5]" />
      </div>
    </div>
  );
};

export default HeroSection;
