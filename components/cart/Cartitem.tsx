import Image from "next/image";
import React, { useEffect } from "react";
import useCartProducts from "../../hooks/useCartProducts";

const CartItem = ({ product }: any) => {
  const { cartDispatch, carts } = useCartProducts();

  const setItem = () => {
    localStorage.setItem("cart", JSON.stringify(carts));
  };
  return (
    <div>
      <div
        key={product.id}
        className="md:flex items-center py-8 border-t border-b border-gray-200 mt-4"
      >
        <div className="h-full w-1/4">
          <Image
            alt="product image"
            height={200}
            width={200}
            src={product.image1}
            className="object-center object-cover"
          />
        </div>
        <div className="md:pl-3 md:w-3/4 w-full">
          <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800">
              {product.title}
            </p>

            <select
              defaultValue={product.qty}
              onChange={(e) => {
                cartDispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: product.id,
                    qty: e.target.value,
                  },
                });
                setItem();
              }}
              className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="w-3/4">
            <p className="text-sm leading-none text-gray-800 ">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-5 pr-6">
            <div className="flex itemms-center">
              <p className="text-base font-black leading-none text-gray-800">
                ${product.price}
              </p>
              <p
                onClick={() => {
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
                className="text-xs ml-10 underline text-red-500 cursor-pointer"
              >
                Remove
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
