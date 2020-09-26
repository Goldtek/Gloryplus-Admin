import {
  LOG_OUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
} from "../actions/action-types";

const initialState = {
  user: {},
  errorMessage: "",
  isAuthenticated: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.user,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default UserReducer;
