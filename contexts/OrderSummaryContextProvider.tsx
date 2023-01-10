import { createContext, useEffect, useReducer } from "react";
import { orderSummaryReducer } from "../reducers/orderSummaryReducer";
import { orderSummary } from "../types/orderType";

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
        payload: {
          orderedProducts: orderData,
          paymentInfromation: "Not Applicable",
          paymentMethod: "Cash",
        },
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
