import React, { useEffect, useState } from "react";
import useOrderSummary from "../hooks/useOrderSummary";

import Link from "next/link";
import useCartProducts from "./../hooks/useCartProducts";

const OrderConfirm = () => {
  const { cartDispatch } = useCartProducts();
  const [finalSummary, setFinalSummary] = useState<any>();

  const orderConfirmHandler = async (orderSummary: any) => {
    console.log(orderSummary);

    cartDispatch({
      type: "INIT_STATE",
      payload: [],
    });
    console.log(orderSummary);

    const response = await fetch(
      "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify(orderSummary),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    localStorage.removeItem("cart");
    localStorage.removeItem("orderSummary");
    localStorage.removeItem("finalSummary");
  };

  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("finalSummary") || "{}");
    setFinalSummary(res);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
        <div>
          <h1 className="text-2xl font-semibold leading-6 text-gray-800">
            Confirm Your Order(Here is your order Details)
          </h1>
        </div>
        <div className="flex mt-7 flex-col items-end w-full space-y-6">
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Email:</b>
              {finalSummary?.userEmail || finalSummary?.userInfo?.userEmail}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Shipping Address:</b> {finalSummary?.deliveryLocation}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Payment Method:</b> {finalSummary?.paymentMethod}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Payment Information: </b> {finalSummary?.paymentInfromation}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="text-lg leading-4 text-gray-600">
              <b>Ordered Products</b>
              <div className="flex justify-between w-full mt-5">
                <p className="w-1/2">Title</p>
                <p className="ml-10">price</p>
                <p>quantity</p>
                <p>total price</p>
              </div>
              {finalSummary?.orderedProducts?.map((product: any) => (
                <div
                  key={product.id}
                  className="flex justify-between w-full mt-5"
                >
                  <p className="w-1/2">{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.qty}</p>
                  <p>{product.qty * product.price}</p>
                </div>
              ))}
              {/* <b>Payment Information: </b> {orderSummary?.paymentInfromation} */}
            </div>
          </div>
        </div>
        <p className="text-2xl font-bold mt-5">
          Subtotal : ${finalSummary?.totalAmount}
        </p>
        <Link href="/myorder">
          <button
            onClick={() => orderConfirmHandler(finalSummary)}
            type="button"
            className="p-10 mt-5 text-base leading-none w-full py-5 bg-gray-800 border-gray-500 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
          >
            Confirm Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirm;
