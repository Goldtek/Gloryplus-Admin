import axios from "axios";

import { FETCH_COURSES_SUCCESS, FETCH_COURSES_REQUEST, FETCH_COURSES_FAILURE } from "./types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchCourseLists = () => {
  return (dispatch) => {
    dispatch(fetchCoursequest());
    axios
      .get(`${API_URL}/course`)
      .then((response) => {
        // response.data is the users
        const courseItems = response.data
        dispatch(fetchCourseSuccess(courseItems));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(fetchCourseFailure(errormsg));
      });
  };
};

export const fetchCoursequest = () => {
  return {
    type: FETCH_COURSES_REQUEST,
  };
};

export const fetchCourseSuccess = (courseItems) => {
  return {
    type: FETCH_COURSES_SUCCESS,
    payload: courseItems,
  };
};

export const fetchCourseFailure = (error) => {
  return {
    type: FETCH_COURSES_FAILURE,
    payload: error,
  };
};
