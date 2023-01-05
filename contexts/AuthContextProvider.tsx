import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type Props = {
  children?: React.ReactNode;
};

type authContexValue = {
  token: string;
  isLoggedIn: boolean;
  login: (token: any) => void;
  logout: () => void;
  // cookieToken: string;
};

export const AuthContext = createContext<authContexValue>({
  token: "",
  isLoggedIn: false,
  login: (token: any) => {},
  logout: () => {},
  // cookieToken: "",
});

const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState<any>();

  const userIsLoggedIn = !!token;

  const loginHandler = (token: any) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue: any = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
