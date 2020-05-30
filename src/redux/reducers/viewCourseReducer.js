import { FETCH_COURSES } from "../actions/types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  coursesItems: [],
  courseItem: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        coursesItems: action.payload,
      };
    default:
      return state;
  }
}
