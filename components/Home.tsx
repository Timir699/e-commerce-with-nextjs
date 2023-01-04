import React, { useContext } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { useEffect, useState } from "react";

import ProductList from "./ProductList";
import { ProductContext } from "./../contexts/ProductContextProvider";

const Home = ({ productData }: any) => {
  const { productsDispatch, products } = useContext(ProductContext);

  useEffect(() => {
    productsDispatch({
      type: "ADD_PRODUCT_TO_LIST",
      payload: { productList: productData },
    });
  }, []);

  return (
    <div>
      <ProductList productData={productData} />
    </div>
  );
};

export default Home;
