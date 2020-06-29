

// export const fetchCourseLists = () => (dispatch) => {
//   axios
//     .get("http://localhost:5000/course")
//     .then((response) =>
//       dispatch({
//         type: FETCH_COURSES_SUCCESS,
//         payload: response.data,
//       })
//     )
//     .catch((err) => {
//       console.log(err);
//     });
// };


import axios from "axios";

import { FETCH_COURSES_SUCCESS, FETCH_COURSES_REQUEST, FETCH_COURSES_FAILURE } from "./types";

export const fetchCourseLists = () => {
  return (dispatch) => {
    dispatch(fetchCoursequest());
    axios
      .get("http://localhost:5000/course")
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
