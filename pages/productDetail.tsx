import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  console.log(router.query.id);

  return <div className="container mx-auto">Product Details</div>;
};

export default ProductDetail;
