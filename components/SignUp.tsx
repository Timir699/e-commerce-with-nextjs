import React, { useRef, useState } from "react";
import Link from "next/link";
import { apiKey } from "../apiKey/apiKey";
import { signUpService } from "../services/auth/signUpService";
import { NextRouter, useRouter } from "next/router";

const SignUp = () => {
  const router: NextRouter = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    const enteredEmail = emailInputRef?.current?.value;
    const enteredPassword = passwordInputRef?.current?.value;
    setIsLoading(true);
    signUpService(apiKey, enteredEmail, enteredPassword).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        alert("Signed up Successfully");
        router.push("loginPage");
      } else {
        res.json().then((data: any) => {
          const errorMessage = data?.error?.message;
          alert(errorMessage);
        });
      }
    });
  };
  return (
    <div>
      <div className="bg-grey-lighter mt-24 flex flex-col">
        <div className="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
          <div className="px-6 py-4 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
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
                  className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                >
                  Sign Up
                </button>
              ) : (
                "loading"
              )}
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link className="border-b border-blue text-blue" href="/loginPage">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
