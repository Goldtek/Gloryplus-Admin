import axios from "axios";

import { FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_REQUEST } from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const registerUser = (data) => {
    return (dispatch) => {
        dispatch(request(data));
        axios
            .post(`${API_URL}/users`)
            .then((response) => {
                dispatch(success(response));
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

export const success = (response) => {
    return {
        type: FETCH_EVENTS_SUCCESS,
        payload: response,
    };
};

export const failure = (error) => {
    return {
        type: FETCH_EVENTS_FAILURE,
        payload: error,
    };
};
