"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const router = useRouter();
  // if(!isAuthenticated){
  //   router.push("/signIn");
  //   return null;
  // }
  return (
    <div className="grid place-items-center min-h-screen text-6xl">
      {user && (
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
      {!isAuthenticated && <p>
        You have to <Link href='/signIn'>signIn</Link> first
        </p>}
    </div>
  );
};

export default HomePage;
