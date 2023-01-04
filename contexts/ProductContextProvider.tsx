import { createContext, useReducer, useState } from "react";
import { productReducer } from "../reducers/product";

type Props = {
  children?: React.ReactNode;
};
export const ProductContext = createContext<any>(null);

const ProductContextProvider = ({ children }: Props) => {
  const [products, productsDispatch] = useReducer(productReducer, []);

  const values = {
    products,
    productsDispatch,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
