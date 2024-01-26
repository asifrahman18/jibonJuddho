"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import {
  checkAuthentication,
  loginUser,
  logoutUser,
  registerUser,
} from "../app/api/auth/route";

import { useToast } from "@/components/ui/use-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user]);

  const login = async (username, password) => {
    try {
      const response = await loginUser(username, password);
      loadUser();
      console.log("Login successful:", response);
      setAuthenticated(true);
      //router.push("/pages/user/");
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message,
      });
    }
  };

  const register = async (firstName, lastName, username, password) => {
    //console.log(firstName, lastName, username, password);
    try {
     // console.log(firstName, lastName, username, password);
      const response = await registerUser(firstName, lastName, username, password);
      console.log("Register successful:", response);

      if (response.error){
        toast({
          variant: "destructive",
          title: "Registration Failed",
          description: response.data.error,
        });
      }
      else{
        login(username, password)
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message,
      });
    }
  };

  const loadUser = async () => {
    try {
      setLoading(true);
      const response = await checkAuthentication();
      console.log("User loaded:", response);

      if (response.id) {
        setAuthenticated(true);
        setLoading(false);
        setUser(response);
        router.push("/user");
      }
      console.log("Login successful:", response);
    } catch (error) {
      console.error("load failed:", error);
    }
  };

  const logout = async () => {
    try {
      const response = await logoutUser();
      console.log("User logged out:", response);

      if (!response) {
        setAuthenticated(false);
        setUser(null);
        router.push("/signIn/");
      }

      console.log("Logout successful:", response);
    } catch (error) {
      console.error("load failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        isAuthenticated,
        error,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
