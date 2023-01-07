import React from "react";
import CartSummary from "../cart/CartSummary";
import ShippingInfo from "./ShippingInfo";

const Checkout = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div
          className="flex lg:flex-row md:flex-row flex-col justify-around"
          id="cart"
        >
          <ShippingInfo />
          <CartSummary isCheckout={true} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
