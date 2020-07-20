import axios from "axios";

import { FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_REQUEST } from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchEventList = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/event`)
      .then((response) => {
        // response.data is the users
        const eventItems = response.data
        dispatch(success(eventItems));
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
    type: FETCH_EVENTS_REQUEST,
  };
};

export const success = (eventItems) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: eventItems,
  };
};

export const failure = (error) => {
  return {
    type: FETCH_EVENTS_FAILURE,
    payload: error,
  };
};
