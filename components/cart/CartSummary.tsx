import Link from "next/link";
import React, { useEffect, useState } from "react";
import useCartProducts from "./../../hooks/useCartProducts";

const CartSummary = ({ isCheckout }: any) => {
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
    <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100">
      <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
        <div>
          <p className="text-4xl font-black leading-9 text-gray-800">
            {isCheckout ? "Order Summary" : "Cart Summary"}
          </p>
          <div className="flex items-center justify-between pt-16">
            <div className="w-56">
              <p className="text-base text-gray-800">Product Name</p>
            </div>
            <p className="text-base text-gray-800">Quantity</p>
            <p className="text-base text-gray-800">Price</p>
          </div>
          {carts.map((cartProduct: any) => (
            <div
              key={cartProduct.id}
              className="flex items-center justify-between pt-8"
            >
              <div className="w-56">
                <p className="text-base leading-none text-gray-800">
                  {cartProduct.title}
                </p>
              </div>
              <p className="text-base leading-none text-gray-800">
                {cartProduct.qty}
              </p>
              <p className="text-base leading-none text-gray-800">
                ${cartProduct.price * cartProduct.qty}
              </p>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p className="text-2xl leading-normal text-gray-800">Total</p>
            <p className="text-2xl font-bold leading-normal text-right text-gray-800">
              ${total}
            </p>
          </div>

          {carts.length === 0 ? (
            <button
              type="button"
              disabled
              className="text-base leading-none w-full py-5 bg-gray-200 border-gray-200 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
            >
              Checkout
            </button>
          ) : (
            <Link href={isCheckout ? "/orderConfirmPage" : "/checkoutPage"}>
              <button
                type="button"
                className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
              >
                {isCheckout ? "Confirm Order" : "Checkout"}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
