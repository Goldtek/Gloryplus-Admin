import { combineReducers } from "redux";
import viewCourseReducer from "./viewCourseReducer";
const rootReducer = combineReducers({ courses: viewCourseReducer });
export default rootReducer;
