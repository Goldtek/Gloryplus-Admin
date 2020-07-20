import axios from "axios";

import { FETCH_COURSES_SUCCESS, FETCH_COURSES_REQUEST, FETCH_COURSES_FAILURE } from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchCourseLists = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/course`)
      .then((response) => {
        // response.data is the users
        const courseItems = response.data
        dispatch(success(courseItems));
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
    type: FETCH_COURSES_REQUEST,
  };
};

export const success = (courseItems) => {
  return {
    type: FETCH_COURSES_SUCCESS,
    payload: courseItems,
  };
};

export const failure = (error) => {
  return {
    type: FETCH_COURSES_FAILURE,
    payload: error,
  };
};
