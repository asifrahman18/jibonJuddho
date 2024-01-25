"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { loginUser, checkAuthentication, logoutUser } from "../app/api/auth/route";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
        description: "Please check your credentials",
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
        router.push("/pages/user/");
        setUser(response);
      }

      console.log("Login successful:", response);
    } catch (error) {
      console.error("load failed:", error);
    }
  };

  const logout = async () => {
    try {
      const response = await logoutUser();
      console.log("User loaded:", response);

      if (response) {
        setAuthenticated(false);
        setUser(null);
        router.push("/");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
