"use client";
import Animation from "./animation";
import Contents from "./contents";

const EmployeeSection = () => {
  return (
    <div>
      <div className="relative mt-20 h-screen overflow-hidden">
        <section className="container z-10 grid grid-cols-1 items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:py-10">
        <div className="hidden md:flex items-center order-1 h-full md:order-1">
          <Animation />
          </div>
          <div className="order-2 md:order-2">
          <Contents />
          </div>
        </section>
      </div>
      <div>
        {/* <div className="absolute inset-0 -z-10 h-full items-center px-5 py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_10%,#121f6b_180%)]" /> */}
        <div className="fixed bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full dark:bg-[#151f4dfd] opacity-50 blur-[80px] md:z-[-1] lg:z-[-1] z-[-5]" />
      </div>
    </div>
  );
};

export default EmployeeSection;
