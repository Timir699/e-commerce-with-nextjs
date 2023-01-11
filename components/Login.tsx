import React, { useContext, useRef, useState } from "react";
import { apiKey } from "../apiKey/apiKey";
import { AuthContext } from "./../contexts/AuthContextProvider";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { loginService } from "../services/auth/loginService";
import useOrderSummary from "./../hooks/useOrderSummary";
import useUserInfo from "../hooks/useUserInfo";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { orderSummaryDispatch } = useOrderSummary();
  const { userInfoDispatch } = useUserInfo();

  const { login } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoogleSignin = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((data: any) => {
        login(data.user?.accessToken);

        orderSummaryDispatch({
          type: "SET_USERINFO",
          payload: {
            userId: data.user.uid,
            userEmail: data.user.email,
          },
        });
        userInfoDispatch({
          type: "SET_USERINFO",
          payload: {
            userId: data.user.uid,
            userEmail: data.user.email,
          },
        });
        Cookies.set("loggedIn", "true");
        setIsLoading(false);
        router.back();
      })
      .catch((error: any) => {
        console.log(error.message);

        setIsLoading(false);
      });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    // const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef?.current?.value;
    const enteredPassword = passwordInputRef?.current?.value;
    setIsLoading(true);

    loginService(apiKey, enteredEmail, enteredPassword)
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data): any => {
            const errorMessage = data?.error?.message;
            alert(errorMessage);
          });
        }
      })
      .then((data) => {
        orderSummaryDispatch({
          type: "SET_USERINFO",
          payload: {
            userId: data.localId,
            userEmail: data.email,
          },
        });
        userInfoDispatch({
          type: "SET_USERINFO",
          payload: {
            userId: data.localId,
            userEmail: data.email,
          },
        });

        if (data.idToken) {
          login(data.idToken);
        }
        Cookies.set("loggedIn", "true");
        router.back();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="bg-grey-lighter mt-24 flex flex-col">
        <div className="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
          <div className="px-6 py-4 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Log in</h1>
            <form onSubmit={submitHandler}>
              <input
                ref={emailInputRef}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                ref={passwordInputRef}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              {!isLoading ? (
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Login
                </button>
              ) : (
                "loading"
              )}
            </form>

            <p>you can log in with</p>
            {!isLoading ? (
              <button
                onClick={handleGoogleSignin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Log in with Google
              </button>
            ) : (
              "loading"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
