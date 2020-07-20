import { FETCH_ASSIGMENT_FAILURE, FETCH_ASSIGMENT_REQUEST, FETCH_ASSIGMENT_SUCCESS } from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
    loading: false,
    error: "",
    assignmentItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ASSIGMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_ASSIGMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                assignmentItems: action.payload,
                error: "",
            };
        case FETCH_ASSIGMENT_FAILURE:
            return {
                ...state,
                loading: false,
                assignmentItems: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
