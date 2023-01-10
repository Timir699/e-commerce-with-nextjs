import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { Props } from "../types/generic";

export const CartContext = createContext<any>(null);

const CartContextProvider = ({ children }: Props) => {
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
