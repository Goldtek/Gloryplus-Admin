import axios from "axios";

import { FETCH_LESSONS_FAILURE, FETCH_LESSONS_SUCCESS, FETCH_LESSONS_REQUEST } from "./action-types";
const API_URL = process.env.REACT_APP_BASEURL;
export const fetchLessonLists = () => {
    return (dispatch) => {
        dispatch(request());
        axios
            .get(`${API_URL}/lesson`)
            .then((response) => {
                // response.data is the users
                const lessonItems = response.data
                dispatch(success(lessonItems));
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
        type: FETCH_LESSONS_REQUEST,
    };
};

export const success = (lessonItems) => {
    return {
        type: FETCH_LESSONS_SUCCESS,
        payload: lessonItems,
    };
};

export const failure = (error) => {
    return {
        type: FETCH_LESSONS_FAILURE,
        payload: error,
    };
};
