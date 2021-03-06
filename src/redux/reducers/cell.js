import { SET_CELLS } from "../actions/types";

const initialState = {
  locations: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CELLS:
      return {
        ...state,
        locations: [...action.cells],
      };
     
    default:
      return state;
  }
}
