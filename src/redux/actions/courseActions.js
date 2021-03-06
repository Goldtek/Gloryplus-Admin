import { FETCH_COURSES } from "./types";
import axios from "axios";

export const fetchCourseLists = () => (dispatch) => {
  axios
    .get("http://localhost:3000/course")
    .then((response) =>
      dispatch({
        type: FETCH_COURSES,
        payload: response.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
