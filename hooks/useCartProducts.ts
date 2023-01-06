import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";

const useCartProducts = () => {
  return useContext(CartContext);
};

export default useCartProducts;
