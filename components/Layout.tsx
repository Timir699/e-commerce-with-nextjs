import React, { ReactNode } from "react";
import { Props } from "../types/generic";
import Navbar from "./Navbar";

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
