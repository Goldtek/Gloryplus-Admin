import { FETCH_CANDIDATE_SUCCESS, FETCH_CANDIDATE_REQUEST, FETCH_CANDIDATE_FAILURE } from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
    loading: false,
    error: "",
    candidateItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CANDIDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CANDIDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                candidateItems: action.payload,
                error: "",
            };
        case FETCH_CANDIDATE_FAILURE:
            return {
                ...state,
                loading: false,
                candidateItems: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
