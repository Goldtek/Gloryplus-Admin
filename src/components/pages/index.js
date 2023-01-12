import Login from "./login";
import Dasboard from "./dashboard";
import ContactUs from "./contact";
import Error404Page from "./notfound";
import {
  CreateCourse,
  CreateLesson,
  CreateAssignment,
  CandidateLists,
  CourseLists
} from "./gpa";
import LiveStream from "./livestream";
import Profile from "./profile";
import ListCourse from "./gpa/viewCourses";
import { FirstTimers, NewUser, Mvp, Users } from "./members";
import CreateEvent from "./event/createEvent";
import ListEvent from "./event/listEvent";
import { CreateBranch, ViewBranch } from "./branches";
import { CreateGallery, ViewGallery } from "./gallery";
import {  CreateCell, ViewCell } from './Cell';
import { CreateSermon } from './Sermon';
import CreateTithe  from './tithe/createTithe';
import ViewTithes from "./tithe/viewTithes";


export {
  Login,
  Dasboard,
  ContactUs,
  Error404Page,
  CreateCourse,
  LiveStream,
  Profile,
  ListCourse,
  FirstTimers,
  CreateEvent,
  ListEvent,
  CreateBranch,
  CreateGallery,
  ViewGallery,
  NewUser,
  Users,
  CreateCell,
  CreateLesson,
  CreateAssignment,
  CandidateLists,
  CourseLists,
  Mvp,
  ViewBranch,
  ViewCell,
  CreateSermon, 
  CreateTithe,
  ViewTithes,
};
