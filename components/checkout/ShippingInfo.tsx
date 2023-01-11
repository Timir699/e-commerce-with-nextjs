import React, { useEffect, useState } from "react";
import useOrderSummary from "../../hooks/useOrderSummary";
import { orderSummary } from "../../types/orderType";
import Maps from "./Maps";

const ShippingInfo = () => {
  const {
    orderSummary,
    orderSummaryDispatch,
  }: { orderSummary: orderSummary; orderSummaryDispatch: any } =
    useOrderSummary();

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

  useEffect(() => {
    orderSummaryDispatch({
      type: "SET_PAYMENT_METHOD",
      payload: "Cash",
    });
    orderSummaryDispatch({
      type: "SET_PAYMENT_INFO",
      payload: "Not Applicable",
    });
  }, []);

  return (
    <div>
      <div className="mt-10 ">
        <p className="text-xl font-bold mb-4">Choose a payment method</p>
        <select
          defaultValue={orderSummary.paymentMethod}
          value={orderSummary.paymentMethod}
          onChange={handlePaymentMethod}
          className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
        >
          <option disabled>Select payment method</option>
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
          : null}

        {orderSummary.paymentMethod === "Cash" ? null : (
          <input
            onChange={paymentInfoHandler}
            type="text"
            className="form-control block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput1"
            placeholder={`${orderSummary?.paymentMethod} Information`}
          />
        )}
      </div>
      <Maps />
    </div>
  );
};

export default ShippingInfo;
