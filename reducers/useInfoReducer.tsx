export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_STATE":
      state = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
      return state;

    case "SET_USERINFO":
      state = {
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
      };
      localStorage.setItem("userInfo", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
