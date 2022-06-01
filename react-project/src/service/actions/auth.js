import { REGISTER_SUCCESS, REGISTER_FAIL } from "../contants";
import createUser from "../api";

export const register = (userObj) => (dispatch) => {
  return createUser(userObj).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      return Promise.reject();
    }
  );
};
