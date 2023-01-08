import { useContext } from "react";
import { OrderSummaryContext } from "../contexts/OrderSummaryContextProvider";

const useOrderSummary = () => {
  return useContext(OrderSummaryContext);
};

export default useOrderSummary;
