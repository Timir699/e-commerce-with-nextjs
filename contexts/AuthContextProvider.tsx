import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { Props } from "../types/generic";

type authContexValue = {
  token: string;
  isLoggedIn: boolean;
  login: (token: any) => void;
  logout: () => void;
};

export const AuthContext = createContext<authContexValue>({
  token: "",
  isLoggedIn: false,
  login: (token: any) => {},
  logout: () => {},
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
    localStorage.removeItem("userInfo");
    localStorage.removeItem("orderSummary");
    localStorage.removeItem("cart");
    Cookies.remove("loggedIn");
    Cookies.remove("userID");
  };

  const contextValue: authContexValue = {
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
