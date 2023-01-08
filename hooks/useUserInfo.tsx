import { useContext } from "react";
import { UserContext } from "../contexts/UserInfoContextProvider";

const useUserInfo = () => {
  return useContext(UserContext);
};

export default useUserInfo;
