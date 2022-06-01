import { REGISTER_SUCCESS, REGISTER_FAIL } from "../contants";
const initialState = {};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default auth;
