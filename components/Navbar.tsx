import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import useCartProducts from "../hooks/useCartProducts";
import useUserInfo from "../hooks/useUserInfo";
import { cart } from "../types/cartType";
import { user } from "../types/userInfo";
import { AuthContext } from "./../contexts/AuthContextProvider";
import useOrderSummary from "./../hooks/useOrderSummary";

const Navbar = () => {
  const router = useRouter();
  const { carts }: { carts: cart } = useCartProducts();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { userInfo }: { userInfo: user } = useUserInfo();
  const { cartDispatch }: { cartDispatch: any } = useCartProducts();
  const { orderSummaryDispatch }: { orderSummaryDispatch: any } =
    useOrderSummary();
  const { userInfoDispatch }: { userInfoDispatch: any } = useUserInfo();

  const handleLogout = () => {
    logout();
    router.push("/loginPage");
    cartDispatch({
      type: "INIT_STATE",
      payload: [],
    });
    orderSummaryDispatch({
      type: "INIT_STATE",
      payload: {},
    });
    userInfoDispatch({
      type: "INIT_STATE",
      payload: {},
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/profile");
    }
  }, []);
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-slate-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link
            href="/"
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-black"
          >
            E-commerce
          </Link>

          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-slate-200 md:flex-row sm:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-slate-200 bg-slate-200 md:bg-slate-200 dark:border-gray-400">
              <li>
                <Link
                  href="/products"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 dark:text-black"
                  aria-current="page"
                >
                  Products
                </Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link
                    href="/myorder"
                    className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 dark:text-black"
                    aria-current="page"
                  >
                    My Orders
                  </Link>
                </li>
              ) : null}
              {isLoggedIn ? (
                <li>
                  <Link
                    href="/profile"
                    className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 dark:text-black"
                    aria-current="page"
                  >
                    Profile
                  </Link>
                </li>
              ) : null}
              {isLoggedIn ? <li>Logged in as:{userInfo?.userEmail}</li> : null}

              {!isLoggedIn ? (
                <li>
                  <Link
                    href="/signUpPage"
                    className="block py-2 pl-3 pr-4 dark:text-black text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0  "
                  >
                    SignUp
                  </Link>
                </li>
              ) : null}
              {!isLoggedIn ? (
                <li>
                  <Link
                    href="/loginPage"
                    className="block py-2 pl-3 pr-4 dark:text-black text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0  "
                  >
                    Login
                  </Link>
                </li>
              ) : null}
              <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                <Link href="/cartPage" role="button" className="relative flex">
                  <svg
                    className="flex-1 w-8 h-8 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {carts?.length}
                  </span>
                </Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-700 hover:bg-gray-900 text-white font-bold  px-4 rounded"
                  >
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
