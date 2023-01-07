import React, { useEffect, useState } from "react";
import CartSummary from "./CartSummary";
import useCartProducts from "../../hooks/useCartProducts";
import CartList from "./CartList";

const Cart = () => {
  const { carts, cartDispatch } = useCartProducts();

  return (
    <>
      <div>
        <div
          className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex md:flex-row flex-col justify-around" id="cart">
            <CartList />
            <CartSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
