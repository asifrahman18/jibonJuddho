"use client";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";


const HomePage = () => {
  const { isAuthenticated, user, loadUser } = useContext(AuthContext);

  useEffect(() => {
    
    const findUser = async () =>{
      await loadUser()
      if (!isAuthenticated && !user) {
        redirect("/signIn");
      }
    }

  },[isAuthenticated, loadUser, user]);

  return (
    <div className="grid place-items-center min-h-screen text-3xl md:text-5xl lg:text-6xl">
      {user && (
        <div>
          <p>Welcome {user.first_name}</p>
          <div className="flex flex-row justify-between p-4">
            <Button>
              <Link href="/company">Add your company</Link>
            </Button>
            <Button>
              <Link href="/explore">Look For Jobs</Link>
            </Button>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <p>
          You have to <Link href="/signIn">signIn</Link> first
        </p>
      )}
    </div>
  );
};

export default HomePage;
