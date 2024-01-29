"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import {
  checkAuthentication,
  loginUser,
  registerUser,
  LoginResponse,
} from "../app/api/auth/route";

import { removeTokenCookie } from "../app/api/auth/cookie";

import { useToast } from "@/components/ui/use-toast";
import { string } from "prop-types";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  loading: boolean;
  user: User | null;
  isAuthenticated: boolean;


  login: (username: string, password: string) => Promise<void>;

  loadUser: () => Promise<void>;

  register: (
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user]);

  const login = async (username: string, password: string) => {
    try {
      const response: LoginResponse = await loginUser(username, password);
      console.log(response);
      await loadUser();
      // router.push("/user");
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Try Again",
      });
    }
    return;
  };

  const loadUser = async () => {
    try {
      setLoading(true);
      const response = await checkAuthentication();
      console.log("User loaded:", response);

      if (response && response.id) {
        setAuthenticated(true);
        setLoading(false);
        setUser(response);
        console.log("Login successful:", response);
        router.push("/user");
      } else
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Try Again",
        });
    } catch (error) {
      console.error("load failed:", error);
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) => {
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

      if (response) {
        if (response.error) {
          toast({
            variant: "destructive",
            title: "Registration Failed",
            description: response.error,
          });
        } else {
          login(username, password);
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "try again",
      });
    }
  };

  const logout = async () => {
    try {
      removeTokenCookie();
      router.push("/signin");
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
        logout,
        register,
        loadUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
