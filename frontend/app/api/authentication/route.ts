import axios from "axios";
import { setTokenCookie, getTokenCookie, removeTokenCookie } from '../../services/cookieService';
import Cookies from 'cookie'

const BASE_URL = "http://127.0.0.1:8000/api";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/token/`, {
      username,
      password,
    });
    const token = response.data.access_token;
    
    setTokenCookie(token);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function logoutUser() {}

export const checkAuthentication = async () => {
  const token = getTokenCookie();

  if (token) {
    try {
      const response = await axios.get(`${BASE_URL}/user/me/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error checking authentication:', error);
      return null;
    }
  }

  return null;
};
