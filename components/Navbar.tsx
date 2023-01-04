import Link from "next/link";
import React from "react";

const Navbar = () => {
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
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-slate-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-slate-200 bg-slate-200 md:bg-slate-200 dark:border-gray-700">
              <li>
                <Link
                  href="/profile"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 dark:text-black"
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/signUp"
                  className="block py-2 pl-3 pr-4 dark:text-black text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0  "
                >
                  SignUp
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block py-2 pl-3 pr-4 dark:text-black text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0  "
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
