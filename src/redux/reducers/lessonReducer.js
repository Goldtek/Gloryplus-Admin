
import { FETCH_LESSONS_FAILURE, FETCH_LESSONS_REQUEST, FETCH_LESSONS_SUCCESS } from "../actions/types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
    loading: false,
    error: "",
    lessonItems: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LESSONS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LESSONS_SUCCESS:
            return {
                ...state,
                loading: false,
                lessonItems: action.payload,
                error: "",
            };
        case FETCH_LESSONS_FAILURE:
            return {
                ...state,
                loading: false,
                lessonItems: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
