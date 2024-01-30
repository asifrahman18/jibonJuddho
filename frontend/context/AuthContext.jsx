"use client";
import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation'
import { createContext, useEffect, useState } from "react";
import { removeTokenCookie } from "../app/api/auth/cookie";
import {
  checkAuthentication,
  loginUser,
  registerUser
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
      console.log("Response:", response);
      await loadUser();
      // router.push("/user");
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        variant: "destructive",
        title: "Login Failed",
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
        console.log("Login successful:", response);
        router.push("/user");
      } else
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: error.message,
        });
    } catch (error) {
      console.error("load failed:", error);
    }
  };

  const register = async (firstName, lastName, username, password) => {
    console.log(firstName, lastName, username, password);
    try {
      console.log(firstName, lastName, username, password);
      const response = await registerUser(
        firstName,
        lastName,
        username,
        password
      );
      console.log("Register successful:", response);

      if (response.error) {
        toast({
          variant: "destructive",
          title: "Registration Failed",
          description: response.data.error,
        });
      } else {
        login(username, password);
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

  const logout = async () => {
    try {
      removeTokenCookie();
      setUser(null);
      setAuthenticated(false);
      console.log("Logout successful:", response);
      redirect('/signIn');
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