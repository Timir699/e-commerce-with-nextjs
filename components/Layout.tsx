import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
