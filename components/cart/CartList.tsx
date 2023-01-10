import Image from "next/image";
import React from "react";
import useCartProducts from "../../hooks/useCartProducts";
import { cart, cartProduct } from "../../types/cartType";
import CartItem from "./Cartitem";

const CartList = () => {
  const { carts }: { carts: cart } = useCartProducts();

  return (
    <div
      className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
      id="scroll"
    >
      <p className="text-3xl font-black text-gray-800 pt-2">Cart</p>

      {carts?.map((product: cartProduct) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CartList;
