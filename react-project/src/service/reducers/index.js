import { combineReducers } from "redux";
import cartItems from "./reducer";

import auth from "./auth";

export default combineReducers({
  cartItems,
  auth,
});
