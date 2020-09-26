import {
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: "",
  branchItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANCHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BRANCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        branchItems: action.payload,
        error: null,
      };
    case FETCH_BRANCHES_FAILURE:
      return {
        ...state,
        loading: false,
        branchItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
