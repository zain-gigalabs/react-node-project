import { REGISTER_SUCCESS, REGISTER_FAIL } from "../contants";
import createUser from "../api";

/*promise.then(
  (response) => { 
     console.log(result);
  },
  (error) => { 
     console.log(error);
  }
); */

const register = (userObj) => (dispatch) => {
  return createUser(userObj).then(
    (response) => {
      console.log(response);
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

/*const register = async (userObj) => async (dispatch) => {
  try {
    await dispatch({
      type: REGISTER_SUCCESS,
    });
    await createUser(userObj);
  } catch (e) {
    await dispatch({
      type: REGISTER_FAIL,
    });
  }
}; */

export default register;
