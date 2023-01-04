import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  console.log(router.query.id);

  return <div>hello</div>;
};

export default ProductDetails;
