import axios from "axios";

import { FETCH_SERMON_SUCCESS, FETCH_SERMON_REQUEST, FETCH_SERMON_FAILURE } from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchSermonList = () => {
    return (dispatch) => {
        dispatch(request());
        axios
            .get(`${API_URL}/sermon`)
            .then((response) => {
                // response.data is the users
                const sermonItems = response.data
                dispatch(success(sermonItems));
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
        type: FETCH_SERMON_REQUEST,
    };
};

export const success = (sermonItems) => {
    return {
        type: FETCH_SERMON_SUCCESS,
        payload: sermonItems,
    };
};

export const failure = (error) => {
    return {
        type: FETCH_SERMON_FAILURE,
        payload: error,
    };
};
