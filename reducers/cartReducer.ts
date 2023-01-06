export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_STATE":
      state = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    case "ADD_TO_CART":
      console.log(action.payload);
      const cartList = [...state, { ...action.payload, qty: 1 }];
      localStorage.setItem("cart", JSON.stringify(cartList));
      return cartList;

    case "REMOVE_FROM_CART":
      const filteredcart = state?.filter(
        (cart: any) => cart.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredcart));
      return filteredcart;

    case "CHANGE_CART_QTY":
      console.log(action.payload);
      const changeQantity = state.filter((c: any) =>
        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      );
      localStorage.setItem("cart", JSON.stringify(changeQantity));
      return changeQantity;

    default:
      return state;
  }
};
