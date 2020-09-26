import axios from "axios";
// import { history } from "../../_helpers";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  LOGIN_REQUEST,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

// export const userLogin = (data) => {
//   // let history = useHistory()
//   return (dispatch) => {
//     axios.post(`${API_URL}/users`, data).then(
//       (user) => {
//         dispatch(loginSuccess(user.data));
//         // history.push('/dashboard', true);
//         // window.location.reload(false)
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         // localStorage.setItem('user', JSON.stringify(user));
//         window.location.href = `/dashboard`;
//         // window.location.href = `/dashboard/${data.brId}`
//         return user;
//       },
//       (error) => {
//         dispatch(errorMessage(error.message));
//       }
//     );
//   };
// };

export function userLogin(data) {
  return (dispatch) => {
    dispatch(request());

    axios.get(`${API_URL}/users`, data).then(
      (users) => {
        const usrfilter = users.data.find((user) => user.email === data.email);
        if (usrfilter && usrfilter.password === data.password) {
          dispatch(loginSuccess(usrfilter));
          window.location.href = `/dashboard`;
          return usrfilter;
        } else if (usrfilter && usrfilter.password !== data.password) {
          dispatch(errorMessage("You are not authorized"));
        }
      },
      (error) => {
        dispatch(errorMessage(error.message));
      }
    );
  };
  function request(user) {
    return { type: LOGIN_REQUEST, user };
  }
  function loginSuccess(user) {
    return { type: LOGIN_SUCCESS, user };
  }
  function errorMessage(error) {
    return { type: LOGIN_FAILURE, error };
  }
}
//NOT IN USE AT THE MOMENT ******
export const userLogout = () => {
  // remove user from local storage to log user out
  // localStorage.removeItem('user');

  return { type: LOG_OUT };
};
