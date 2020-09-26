import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import EventReducers from "./eventReducer";
import LessonReducer from "./lessonReducer";
import AssigmentReducer from "./assignmentReducer";
import SermonReducer from "./sermonReducers";
import candidateReducer from "./candidateReducer";
import branchReducer from "./branchReducer";
import { galleryCoverReducer, galleriesReducer } from "./galleryReducer";
import User from "./userReducer";
const rootReducer = combineReducers({
  courses: CourseReducer,
  events: EventReducers,
  lessons: LessonReducer,
  assignments: AssigmentReducer,
  sermon: SermonReducer,
  gpaCandidates: candidateReducer,
  branches: branchReducer,
  coverGallery: galleryCoverReducer,
  galleries: galleriesReducer,
  User,
});
export default rootReducer;
