import { createContext, useEffect, useReducer, useState } from "react";
import { userReducer } from "../reducers/useInfoReducer";

export const UserContext = createContext<any>(null);

const UserInfoContextProvider = ({ children }: any) => {
  const [userInfo, userInfoDispatch] = useReducer(userReducer, {});

  const values = {
    userInfo,
    userInfoDispatch,
  };

  useEffect(() => {
    let userInfo;
    if (localStorage.getItem("userInfo")) {
      userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

      userInfoDispatch({
        type: "INIT_STATE",
        payload: userInfo,
      });
    }
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserInfoContextProvider;
