import { FETCH_SERMON_SUCCESS, FETCH_SERMON_REQUEST, FETCH_SERMON_FAILURE } from "../actions/types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
    loading: false,
    error: "",
    sermonItems: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERMON_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SERMON_SUCCESS:
            return {
                ...state,
                loading: false,
                sermonItems: action.payload,
                error: "",
            };
        case FETCH_SERMON_FAILURE:
            return {
                ...state,
                loading: false,
                sermonItems: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
