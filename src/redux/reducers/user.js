import { FETCH_CITIES, FETCH_COUNTRIES, FETCH_STATES, USER_LOGGED_IN } from "../actions/types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  roles: [{ uid: 'FT', name: "First Timer"}, { uid: 'mem', name: "Member"}, { uid: 'ST', name: "Second Timer"},  { uid: 'AD', name: "Admin"}, { uid: "SA", name: "Super Admin"}, { uid: 'HFL', name: "House FellowShip Leader"},{ uid: "map", name: "MVP" }, { uid: 'media', name: "MEDIA" } ],
  states: [],
  cities: [],
  countries: [],
  user:{},
  isAuthenticated: false,
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: [...action.countries],
      };
      case FETCH_STATES:
      return {
        ...state,
        states: action.states,
      };
      case FETCH_CITIES:
      return {
        ...state,
        cities: action.cities,
      };
      case USER_LOGGED_IN:
        return {
          ...state,
          user: action.user,
          isAuthenticated: true,
        };
    default:
      return state;
  }
}
