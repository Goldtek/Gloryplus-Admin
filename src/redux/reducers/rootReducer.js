import { combineReducers } from "redux";
import viewCourseReducer from "./viewCourseReducer";
import viewEventReducers from "./viewEventReducer";
const rootReducer = combineReducers({
  courses: viewCourseReducer,
  events: viewEventReducers,
});
export default rootReducer;
