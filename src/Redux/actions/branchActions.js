import axios from "axios";

import {
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchBranchList = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/branches`)
      .then((response) => {
        // response.data is the users
        const branchItems = response.data;
        dispatch(success(branchItems));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => {
  return {
    type: FETCH_BRANCHES_REQUEST,
  };
};

export const success = (branchItems) => {
  return {
    type: FETCH_BRANCHES_SUCCESS,
    payload: branchItems,
  };
};

export const failure = (error) => {
  return {
    type: FETCH_BRANCHES_FAILURE,
    payload: error,
  };
};
