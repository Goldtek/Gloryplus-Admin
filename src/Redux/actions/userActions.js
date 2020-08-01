import axios from "axios";
// import { history } from "../../_helpers";
import { LOGIN_SUCCESS, STORE_USER_ERROR_MSG, LOG_OUT } from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });

export const errorMessage = (message) => ({
  type: STORE_USER_ERROR_MSG,
  message,
});

export const userLogin = (data) => {
  // let history = useHistory()
  return (dispatch) => {
    axios.post(`${API_URL}/users`, data).then(
      (user) => {
        dispatch(loginSuccess(user.data));
        // history.push('/dashboard', true);
        // window.location.reload(false)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('user', JSON.stringify(user));
        window.location.href = `/dashboard`;
        // window.location.href = `/dashboard/${data.brId}`
        return user;
      },
      (error) => {
        dispatch(errorMessage(error.message));
      }
    );
  };
};

//NOT IN USE AT THE MOMENT ******
export const userLogout = () => {
  // remove user from local storage to log user out
  // localStorage.removeItem('user');

  return { type: LOG_OUT };
};
