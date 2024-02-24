//'use client'
import axios from "axios";

import { setTokenCookie, getTokenCookie, removeTokenCookie } from "./cookie";

const BASE_URL = process.env.NEXT_PUBLIC_URL


export const loginUser = async (username, password) => {
  try {
    console.log(BASE_URL)
    const response = await axios.post(
      `${BASE_URL}/user/token/`,
      {
        username,
        password,
      },
      {
        headers: "application/json",
      }
    );
    const token = response.data.access;
    console.log("token:", token);
    setTokenCookie(token);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (firstName, lastName, username, password) => {

  try {
    const response = await axios.post(`${BASE_URL}/user/register/`, {
      first_name: firstName,
      last_name: lastName,
      email: username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function logoutUser() {
 

  return token;
}

export const checkAuthentication = async () => {
  const token = getTokenCookie();

  if (!token) {
    console.error("Login first", error);
  }

  if (token) {
    try {
      const response = await axios.get(`${BASE_URL}/user/me/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error checking authentication:", error);
      return null;
    }
  }

  return null;
};