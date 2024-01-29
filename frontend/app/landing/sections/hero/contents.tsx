//'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contents = () => {
  return (
    <div className="mt-32 ">
      <h1 className="text-xl md:text-5xl lg:text-5xl">
        Your Gateway to Career Excellence
      </h1>
      <h4 className="mt-2 w-full lg:w-[60%] text-lg">
        Step into a world of possibilities where career excellence is within
        reach. Discover exciting opportunities across the nation and propel your
        professional journey forward. Whether you seek jobs, internships, or
        training programs, our platform is designed to empower your ambitions
      </h4>
      <div className="mt-4 ">
        <Link href="/pages/signIn">
          <Button>Start Exploring</Button>
        </Link>
      </div>
    </div>
  );
};

export default Contents;
