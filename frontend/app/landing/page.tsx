"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import EmployeeSection from "./sections/employee/page";
import EmployerSection from "./sections/employer/page";
import HeroSection from "./sections/hero/page";
import { redirect } from 'next/navigation';

const Landing = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <div>
      {!user && (
        <div>
          <HeroSection />
          <EmployeeSection />
          <EmployerSection />
        </div>
      )}
      {isAuthenticated && redirect('/user')}
    </div>
  );
};

export default Landing;
