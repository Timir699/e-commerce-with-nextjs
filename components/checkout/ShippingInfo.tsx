import React, { useState } from "react";
import Maps from "./Maps";

const ShippingInfo = () => {
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [paymentInfo, setPaymentInfo] = useState(null);
  const handlePaymentMethod = (e: any) => {
    setPaymentMethod(e.target.value);
  };
  const paymentInfoHandler = (e: any) => {
    setPaymentInfo(e.target.value);
  };

  const paymentInfoOfUser = {
    method: paymentMethod,
    methodInfo: paymentInfo,
  };

  console.log(paymentInfoOfUser);

  return (
    <div>
      <div className="mt-10 ">
        <p className="text-xl font-bold mb-4">Choose a payment method</p>
        <select
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
        {paymentMethod !== "Cash"
          ? `Give your ${paymentMethod} information`
          : ""}
        {paymentMethod !== "Cash" ? (
          <input
            onChange={paymentInfoHandler}
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput1"
            placeholder={`${paymentMethod} Information`}
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
