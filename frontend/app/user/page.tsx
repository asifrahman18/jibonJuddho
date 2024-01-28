"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <div className="grid place-items-center min-h-screen text-6xl">
      {isAuthenticated && (
        <div >
          <p>Welcome {user.first_name}</p>
          <div className="flex flex-row justify-between p-4">
            <Button className="">
              <Link href="/company">Add your company</Link>
            </Button>
            <Button className="">
              <Link href="/explore">Look For Jobs</Link>
            </Button>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <p>
          You need to <Link href="signIn/"> sign in </Link> first
        </p>
      )}
    </div>
  );
};

export default HomePage;
