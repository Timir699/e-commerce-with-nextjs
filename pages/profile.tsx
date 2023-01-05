import Router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

const Profile = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  console.log(isLoggedIn);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     router.push("/profile");
  //   }
  // }, []);

  return <div className="container mx-auto">profile</div>;
};

export default Profile;
