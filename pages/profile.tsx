import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import useUserInfo from "../hooks/useUserInfo";

const Profile = () => {
  const router = useRouter();
  const { userInfo } = useUserInfo();
  console.log(userInfo);

  return (
    <div className="container mx-auto text-xl">
      <p className="px-10 pt-10 text-xl">
        <b>User id:</b> {userInfo?.userId}
      </p>
      <p className="px-10 py-5">
        <b>User email:</b> {userInfo?.userEmail}
      </p>
      <Link className="px-10 py-5 underline text-xl" href="/myorder">
        See my Orders
      </Link>
    </div>
  );
};

export default Profile;
