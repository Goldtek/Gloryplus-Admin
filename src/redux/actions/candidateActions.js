import axios from "axios";

import { FETCH_CANDIDATE_SUCCESS, FETCH_CANDIDATE_REQUEST, FETCH_CANDIDATE_FAILURE } from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchCandidates = () => {
    return (dispatch) => {
        dispatch(request());
        axios
            .get(`${API_URL}/members`)
            .then((response) => {
                // response.data is the users
                const candidateItems = response.data
                dispatch(sucess(candidateItems));
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
        type: FETCH_CANDIDATE_REQUEST,
    };
};

export const sucess = (candidateItems) => {
    return {
        type: FETCH_CANDIDATE_SUCCESS,
        payload: candidateItems,
    };
};

export const failure = (error) => {
    return {
        type: FETCH_CANDIDATE_FAILURE,
        payload: error,
    };
};
