import Cookies from 'js-cookie';

const TOKEN_COOKIE_NAME = 'token_cookie_';

export const setTokenCookie = (token: string) => {
  Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 7 });
};

export const getTokenCookie = (): string | null => {
  return Cookies.get(TOKEN_COOKIE_NAME) || null;
};

export const removeTokenCookie = () => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};