import React, { useEffect, useState } from "react";
import useOrderSummary from "../../hooks/useOrderSummary";
import Maps from "./Maps";

const ShippingInfo = () => {
  const { orderSummary, orderSummaryDispatch } = useOrderSummary();
  console.log(orderSummary);

  const handlePaymentMethod = (e: any) => {
    orderSummaryDispatch({
      type: "SET_PAYMENT_METHOD",
      payload: e.target.value,
    });
  };
  const paymentInfoHandler = (e: any) => {
    orderSummaryDispatch({
      type: "SET_PAYMENT_INFO",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <div className="mt-10 ">
        <p className="text-xl font-bold mb-4">Choose a payment method</p>
        <select
          defaultValue={orderSummary.paymentMethod}
          onChange={handlePaymentMethod}
          className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
        >
          <option>Cash</option>
          <option>Bkash</option>
          <option>Nagad</option>
          <option>Rocket</option>
          <option>Bank Account</option>
        </select>
      </div>

      <div className="mt-4">
        {orderSummary.paymentMethod !== "Cash"
          ? `Give your ${orderSummary.paymentMethod} information`
          : ""}
        {orderSummary.paymentMethod !== "undefined" ? (
          <input
            defaultValue={orderSummary.paymentInfromation}
            onChange={paymentInfoHandler}
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput1"
            placeholder={`${orderSummary?.paymentMethod} Information`}
          />
        ) : (
          ""
        )}
      </div>
      <Maps />
    </div>
  );
};

export default ShippingInfo;
