import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import EventReducers from "./eventReducer";
import LessonReducer from "./lessonReducer"
import AssigmentReducer from "./assignmentReducer"
const rootReducer = combineReducers({
  courses: CourseReducer,
  events: EventReducers,
  lessons: LessonReducer,
  assignments: AssigmentReducer
});
export default rootReducer;
