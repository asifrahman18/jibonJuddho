import Cookies from 'js-cookie';

const TOKEN_COOKIE_NAME = 'token_cookie_'; // Replace with your desired cookie name

export const setTokenCookie = (token: string) => {
  console.log('Setting token cookie with value:', token);
  Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 7 }); // Set expiration based on your requirements
};

export const getTokenCookie = (): string | null => {
  const token = Cookies.get(TOKEN_COOKIE_NAME) || null;
  console.log('Retrieving token cookie with value:', token);
  return token;
};

export const removeTokenCookie = () => {
  console.log('Removing token cookie');
  Cookies.remove(TOKEN_COOKIE_NAME);
};
