import { FETCH_COURSES_SUCCESS, FETCH_COURSES_REQUEST, FETCH_COURSES_FAILURE } from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: "",
  courseItems: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courseItems: action.payload,
        error: "",
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        courseItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
