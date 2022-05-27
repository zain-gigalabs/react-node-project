import { ADD_TO_CART } from "../contants";
const initialState = {
  cartData: [],
};
export default function cartItems(state = initialState, action) {
  console.warn(action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.data,
      };
      break;
    default:
      return state;
  }
}
