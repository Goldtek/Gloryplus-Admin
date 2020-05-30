import { combineReducers } from "redux";
import viewCourseReducer from "./viewCourseReducer";

export default combineReducers({ posts: viewCourseReducer });
