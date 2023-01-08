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
      console.log(state);
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_PAYMENT_INFO":
      state = {
        ...state,
        paymentInfromation: action.payload,
      };
      console.log(state);
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;
    case "SET_ORDER_INFO":
      state = {
        ...state,
        orderedProducts: action.payload,
      };
      console.log(state);
      localStorage.setItem("orderSummary", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
