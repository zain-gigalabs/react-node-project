import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../contants";
import { createUser, login } from "../api";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

/*promise.then(
  (response) => { 
     console.log(result);
  },
  (error) => { 
     console.log(error);
  }
); */

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

export const loginUser = (email, password) => (dispatch) => {
  return login(email, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response.data },
      });
      history.push("/profile");
      window.location.reload();

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      alert("Incorrect credientials");
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
