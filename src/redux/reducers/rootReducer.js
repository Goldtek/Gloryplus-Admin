import { combineReducers } from "redux";
import viewCourseReducer from "./viewCourseReducer";
import viewEventReducers from "./viewEventReducer";
import userReducer from './user';
const rootReducer = combineReducers({
  user: userReducer,
  courses: viewCourseReducer,
  events: viewEventReducers,
});
export default rootReducer;
