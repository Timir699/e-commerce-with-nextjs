import React, { useEffect, useState } from "react";
import CartSummary from "./CartSummary";
import useCartProducts from "../../hooks/useCartProducts";
import CartList from "./CartList";

const Cart = () => {
  const { carts, cartDispatch } = useCartProducts();

  const [total, setTotal] = useState();

  useEffect(() => {
    const subTotal = carts?.reduce(
      (acc: any, curr: any) => acc + curr.price * curr.qty,
      0
    );
    setTotal(subTotal);
  }, [carts]);

  return (
    <>
      <div>
        <div
          className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex md:flex-row flex-col justify-around" id="cart">
            <CartList />
            <CartSummary total={total} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
