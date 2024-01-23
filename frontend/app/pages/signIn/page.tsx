"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterPage from "./register";
import SignInPage from "./sign-in";

const signIn = () => {
  return (
    <div>
      <div className="grid place-items-center h-screen">
        <Tabs defaultValue="signIn" className="w-[400px]">
          <TabsList className="items-center flex">
            <TabsTrigger className="w-full" value="signIn">
              Sign in
            </TabsTrigger>
            <TabsTrigger className="w-full" value="register">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent className="grid place-items-center" value="signIn">
            <SignInPage />
          </TabsContent>
          <TabsContent className="grid place-items-center" value="register">
            <RegisterPage />
          </TabsContent>
        </Tabs>
      </div>
      <div className="fixed bottom-auto left-0 right-auto top-0 h-[600px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full dark:bg-[#31126bb9] opacity-50 blur-[80px] md:z-[-1] lg:z-[-1] z-[-5]" />
    </div>
  );
};

export default signIn;
