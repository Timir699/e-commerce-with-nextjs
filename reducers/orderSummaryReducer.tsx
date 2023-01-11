export const orderSummaryReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_STATE":
      state = {
        orderedProducts: action.payload.orderedProducts,
        paymentInfromation: action.payload.paymentInfromation,
        paymentMethod: action.payload.paymentMethod,
      };
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_DELIVERY_LOCATION":
      state = {
        ...state,
        deliveryLocation: action.payload,
      };
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_PAYMENT_METHOD":
      state = {
        ...state,
        paymentMethod: action.payload,
      };
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_PAYMENT_INFO":
      state = {
        ...state,
        paymentInfromation: action.payload,
      };

      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_ORDER_INFO":
      state = {
        ...state,
        orderedProducts: action.payload.carts,
        userInfo: action.payload.userInfo,
      };
    case "SET_SUBTOTAL":
      state = {
        ...state,
        totalAmount: action.payload,
      };

      localStorage.setItem("orderSummary", JSON.stringify(state));
    case "SET_FINAL":
      // state = action.payload;
      const test = {
        ...action.payload.orderSummary,
        userInfo: action.payload.userInfo,
        totalAmount: action.payload.totalAmount,
        orderedProducts: action.payload.carts,
      };
      console.log(test);

      // console.log(action.payload.orderSummary);
      // console.log(action.payload.userInfo);

      localStorage.setItem("finalSummary", JSON.stringify(test));
      return state;

    default:
      return state;
  }
};
