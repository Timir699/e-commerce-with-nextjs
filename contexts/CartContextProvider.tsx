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
    let cartData;
    if (localStorage.getItem("cart")) {
      cartData = JSON.parse(localStorage.getItem("cart") || "{}");

      cartDispatch({
        type: "INIT_STATE",
        payload: cartData,
      });
    }
  }, []);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
