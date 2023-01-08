import React, { useEffect } from "react";
import useOrderSummary from "../hooks/useOrderSummary";
import useCartProducts from "./../hooks/useCartProducts";

const OrderConfirm = () => {
  const { orderSummary, orderSummaryDispatch } = useOrderSummary();
  const { cartDispatch } = useCartProducts();

  console.log(orderSummary);
  useEffect(() => {
    localStorage.setItem("orderSummary", "");
    localStorage.setItem("cart", "");
    orderSummaryDispatch({
      type: "INIT_STATE",
      payload: [],
    });
    cartDispatch({
      type: "INIT_STATE",
      payload: [],
    });
  }, []);
  return <div></div>;
};

export default OrderConfirm;
