import axios from "axios";

import { FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_REQUEST } from "./types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchEventList = () => {
  return (dispatch) => {
    dispatch(fetchEventRequest());
    axios
      .get(`${API_URL}/event`)
      .then((response) => {
        // response.data is the users
        const eventItems = response.data
        dispatch(fetchEventSuccess(eventItems));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(fetchEventFailure(errormsg));
      });
  };
};

export const fetchEventRequest = () => {
  return {
    type: FETCH_EVENTS_REQUEST,
  };
};

export const fetchEventSuccess = (eventItems) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: eventItems,
  };
};

export const fetchEventFailure = (error) => {
  return {
    type: FETCH_EVENTS_FAILURE,
    payload: error,
  };
};
