import { FETCH_EVENTS } from "../actions/types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  eventItems: [],
  eventItem: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        eventItems: action.payload,
      };
    default:
      return state;
  }
}
