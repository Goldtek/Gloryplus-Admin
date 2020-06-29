
import axios from "axios";

import { FETCH_LESSONS_FAILURE, FETCH_LESSONS_SUCCESS, FETCH_LESSONS_REQUEST } from "./types";

export const fetchLessonLists = () => {
    return (dispatch) => {
        dispatch(fetchLessonRequest());
        axios
            .get("http://localhost:5000/lesson")
            .then((response) => {
                // response.data is the users
                const lessonItems = response.data
                dispatch(fetchLessonSuccess(lessonItems));
            })
            .catch((error) => {
                // error.message is the error message
                const errormsg = error.message;
                dispatch(fetchLessonFailure(errormsg));
            });
    };
};

export const fetchLessonRequest = () => {
    return {
        type: FETCH_LESSONS_REQUEST,
    };
};

export const fetchLessonSuccess = (lessonItems) => {
    return {
        type: FETCH_LESSONS_SUCCESS,
        payload: lessonItems,
    };
};

export const fetchLessonFailure = (error) => {
    return {
        type: FETCH_LESSONS_FAILURE,
        payload: error,
    };
};
