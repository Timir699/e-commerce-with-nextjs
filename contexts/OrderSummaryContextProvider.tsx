import { createContext, useEffect, useReducer } from "react";
import { orderSummaryReducer } from "../reducers/orderSummaryReducer";

export const OrderSummaryContext = createContext<any>({});

const OrderSummaryContextProvider = ({ children }: any) => {
  const [orderSummary, orderSummaryDispatch] = useReducer(
    orderSummaryReducer,
    {}
  );
  const values = {
    orderSummary,
    orderSummaryDispatch,
  };
  useEffect(() => {
    let orderData;
    if (localStorage.getItem("orderSummary")) {
      orderData = JSON.parse(localStorage.getItem("orderSummary") || "{}");

      orderSummaryDispatch({
        type: "INIT_STATE",
        payload: orderData,
      });
    }
  }, []);

  return (
    <OrderSummaryContext.Provider value={values}>
      {children}
    </OrderSummaryContext.Provider>
  );
};

export default OrderSummaryContextProvider;
