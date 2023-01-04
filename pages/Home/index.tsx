import React from "react";
import Home from "../../components/Home";

const HomePage = ({ productData }: any) => {
  console.log(productData);

  return (
    <div>
      <Home productData={productData} />
    </div>
  );
};

export default HomePage;
