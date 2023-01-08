export const orderSummaryReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_STATE":
      state = action.payload;
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_DELIVERY_LOCATION":
      state = {
        ...state,
        deliveryLocation: action.payload,
      };
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_LOCATION_COORDINATES":
      state = {
        ...state,
        locationCoordinates: action.payload,
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
      return state;
    // case "SET_USERINFO":
    //   state = {
    //     ...state,
    //     userId: action.payload.userId,
    //     userName: action.payload.userName,
    //     userEmail: action.payload.userEmail,
    //   };

    //   localStorage.setItem("orderSummary", JSON.stringify(state));
    //   return state;
    default:
      return state;
  }
};
