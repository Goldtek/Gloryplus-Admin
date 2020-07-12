import axios from "axios";

import { FETCH_CANDIDATE_SUCCESS, FETCH_CANDIDATE_REQUEST, FETCH_CANDIDATE_FAILURE } from "./types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchCandidates = () => {
    return (dispatch) => {
        dispatch(fetchCandidateRequest());
        axios
            .get(`${API_URL}/users`)
            .then((response) => {
                // response.data is the users
                const candidateItems = response.data
                dispatch(fetchCandidateSuccess(candidateItems));
            })
            .catch((error) => {
                // error.message is the error message
                const errormsg = error.message;
                dispatch(fetchCandidateFailure(errormsg));
            });
    };
};

export const fetchCandidateRequest = () => {
    return {
        type: FETCH_CANDIDATE_REQUEST,
    };
};

export const fetchCandidateSuccess = (candidateItems) => {
    return {
        type: FETCH_CANDIDATE_SUCCESS,
        payload: candidateItems,
    };
};

export const fetchCandidateFailure = (error) => {
    return {
        type: FETCH_CANDIDATE_FAILURE,
        payload: error,
    };
};
