import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext<any>(null);

const CartContextProvider = ({ children }: any) => {
  const [carts, cartDispatch] = useReducer(cartReducer, []);

  const values = {
    carts,
    cartDispatch,
  };

  useEffect(() => {
    let l;
    if (localStorage.getItem("cart")) {
      l = JSON.parse(localStorage.getItem("cart") || "{}");
      console.log(l);

      cartDispatch({
        type: "INIT_STATE",
        payload: l,
      });
    }
  }, []);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
