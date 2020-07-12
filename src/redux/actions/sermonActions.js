import axios from "axios";

import { FETCH_SERMON_SUCCESS, FETCH_SERMON_REQUEST, FETCH_SERMON_FAILURE } from "./types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchSermonList = () => {
    return (dispatch) => {
        dispatch(fetchSermonRequest());
        axios
            .get(`${API_URL}/sermon`)
            .then((response) => {
                // response.data is the users
                const sermonItems = response.data
                dispatch(fetchSermonSuccess(sermonItems));
            })
            .catch((error) => {
                // error.message is the error message
                const errormsg = error.message;
                dispatch(fetchSermonFailure(errormsg));
            });
    };
};
export const fetchSermonRequest = () => {
    return {
        type: FETCH_SERMON_REQUEST,
    };
};

export const fetchSermonSuccess = (sermonItems) => {
    return {
        type: FETCH_SERMON_SUCCESS,
        payload: sermonItems,
    };
};

export const fetchSermonFailure = (error) => {
    return {
        type: FETCH_SERMON_FAILURE,
        payload: error,
    };
};
