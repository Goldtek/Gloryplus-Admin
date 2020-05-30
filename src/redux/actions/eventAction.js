import { FETCH_EVENTS } from "./types";
import axios from "axios";

export const fetchEventList = () => (dispatch) => {
  axios
    .get("http://localhost:3000/event")
    .then((event) =>
      dispatch({
        type: FETCH_EVENTS,
        payload: event.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
