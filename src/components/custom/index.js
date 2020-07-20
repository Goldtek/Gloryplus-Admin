import Login from "./Login";
import Register from "./Register";
import Error404Page from "./notfound";
import LiveStream from "./Livestream";
import CreateMember from "./Members/createMember";
import Dasboard from "./Dashboard/dashboard";
import { User } from "./user";
import { CreateEvent, EventLists } from "./Event"
import { CreateLesson, CandidateLists, CreateAssignment, CreateCourse, CourseLists } from "./Gpa"
import { CreateGallery } from "./Gallery"
import { CreateSermon, SermonList } from "./Sermon"
import { CreateCell } from "./Cell"

export {
  Login,
  Dasboard,
  Error404Page,
  CreateCourse,
  LiveStream,
  User,
  CourseLists,
  CreateMember,
  CreateEvent,
  CreateLesson,
  EventLists,
  Register,
  CreateAssignment,
  CreateGallery,
  CreateSermon,
  SermonList,
  CandidateLists,
  CreateCell
};
