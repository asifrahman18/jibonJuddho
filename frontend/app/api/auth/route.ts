'use client'
import axios from "axios";

import { setTokenCookie, getTokenCookie, removeTokenCookie } from "./cookie";

const BASE_URL = "https://rahman184.pythonanywhere.com/api";

export interface LoginResponse {
  access: string;
}

interface RegisterResponse {
  id?: number; 
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  error?: string; 
  message?: string;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}


export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${BASE_URL}/user/token/`,
      {
        username,
        password 
      }
    );
    
    const token = response.data.access;
    setTokenCookie(token);
    return response.data;
  } catch (error) {
    throw error; 
  }
}

export const registerUser = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string  
): Promise<RegisterResponse> => {

  try {
    const response = await axios.post<RegisterResponse>(`${BASE_URL}/user/register/`, {
      first_name: firstName,
      last_name: lastName,
      email: username,
      password
    });

    return response.data;

  } catch (error) {
    throw error;
  }
}

export const checkAuthentication = async (): Promise<User | null> => {

  const token = getTokenCookie();

  if (!token) {
    console.error("Login first", Error); 
  }

  if (token) {
    try {
      const response = await axios.get<User>(`${BASE_URL}/user/me/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;

    } catch (error) {
      console.error("Error checking authentication:", error);
      return null;
    }
  }

  return null;
}

