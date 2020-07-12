import Login from "./Authenticate";
import Register from "./Register";
import Dasboard from "./Dashboard";
import Error404Page from "./notfound";
import LiveStream from "./Livestream";
import { User } from "./user";
import CreateMember from "./Members/createMember";
import { CreateEvent } from "./Event"
import { EventLists } from "./Event"
import { CreateLesson, CandidateLists, CreateAssignment, CreateCourse, CourseLists } from "./Gpa"
import { CreateGallery } from "./Gallery"
import { CreateSermon } from "./Sermon"
import { SermonList } from "./Sermon"

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
  CandidateLists
};
