import React from "react";
import CartSummary from "../components/cart/CartSummary";
import CartList from "../components/cart/CartList";

const CartPage = () => {
  return (
    <div className="container mx-auto">
      <div
        className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div className="flex md:flex-row flex-col justify-around" id="cart">
          <CartList />
          <CartSummary isCheckout={false} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
