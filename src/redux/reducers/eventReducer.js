import { FETCH_EVENTS_SUCCESS, FETCH_EVENTS_REQUEST, FETCH_EVENTS_FAILURE } from "../actions/types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: "",
  eventItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        eventItems: action.payload,
        error: "",
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        eventItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
