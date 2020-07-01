import axios from "axios";

import { FETCH_ASSIGMENT_FAILURE, FETCH_ASSIGMENT_SUCCESS, FETCH_ASSIGMENT_REQUEST } from "./types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchAssignments = () => {
    return (dispatch) => {
        dispatch(fetchAssRequest());
        axios
            .get(`${API_URL}/assigments`)
            .then((response) => {
                // response.data is the users
                const assignmentItems = response.data
                dispatch(fetchAssSuccess(assignmentItems));
            })
            .catch((error) => {
                // error.message is the error message
                const errormsg = error.message;
                dispatch(fetchAssFailure(errormsg));
            });
    };
};

export const fetchAssRequest = () => {
    return {
        type: FETCH_ASSIGMENT_REQUEST,
    };
};

export const fetchAssSuccess = (assignmentItems) => {
    return {
        type: FETCH_ASSIGMENT_SUCCESS,
        payload: assignmentItems,
    };
};

export const fetchAssFailure = (error) => {
    return {
        type: FETCH_ASSIGMENT_FAILURE,
        payload: error,
    };
};
