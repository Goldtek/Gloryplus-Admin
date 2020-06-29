import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import EventReducers from "./eventReducer";
import LessonReducer from "./lessonReducer"
const rootReducer = combineReducers({
  courses: CourseReducer,
  events: EventReducers,
  lessons: LessonReducer
});
export default rootReducer;
