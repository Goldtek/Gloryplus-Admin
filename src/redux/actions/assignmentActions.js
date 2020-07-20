import axios from "axios";

import { FETCH_ASSIGMENT_FAILURE, FETCH_ASSIGMENT_SUCCESS, FETCH_ASSIGMENT_REQUEST } from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchAssignments = () => {
    return (dispatch) => {
        dispatch(request());
        axios
            .get(`${API_URL}/assigments`)
            .then((response) => {
                // response.data is the users
                const assignmentItems = response.data
                dispatch(success(assignmentItems));
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
        type: FETCH_ASSIGMENT_REQUEST,
    };
};

export const success = (assignmentItems) => {
    return {
        type: FETCH_ASSIGMENT_SUCCESS,
        payload: assignmentItems,
    };
};

export const failure = (error) => {
    return {
        type: FETCH_ASSIGMENT_FAILURE,
        payload: error,
    };
};
