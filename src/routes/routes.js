import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import PrivateRoute from "./PrivateRoute"
import { Role } from "../_helpers"
import {
  Login,
  Dashboard,
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
} from "../Components/Custom";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Helmet>
                <title>Glory Plus Admin</title>
              </Helmet>
              <Login />
            </Fragment>
          )}
        />

        <Route path="/register" component={Register} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} roles={[Role.Admin]} />
        <PrivateRoute exact path="/livestream/create" component={LiveStream} roles={[Role.Admin]} />

        <Route path="/dashboard/member/create">
          <Helmet>
            <title>Create Member</title>
          </Helmet>
          <CreateMember />
        </Route>
        <Route exact path="/dashboard/gpa/create">
          <Helmet>
            <title>Create Course</title>
          </Helmet>
          <CreateCourse />
        </Route>

        <Route
          exact
          path="/dashboard/gpa/view"
          render={(props) => (
            <Fragment>
              <Helmet>
                <title>List Course</title>
              </Helmet>
              <CourseLists {...props} />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/dashboard/gpa/view/:title/:id"
          render={(props) => (
            <Fragment>
              <Helmet>
                <title>Create Lesson</title>
              </Helmet>
              <CreateLesson {...props} />
            </Fragment>
          )}
        />

        <Route
          exact
          path="/dashboard/gpa/lesson/create/:id"
          render={(props) => <CreateLesson {...props} />}
        />


        <Route
          exact
          path="/dashboard/gpa/assignment/:id"
          render={(props) => <CreateAssignment {...props} />}
        />
        <Route
          exact
          path="/dashboard/gpa/candidates"
          render={(props) => <CandidateLists {...props} />}
        />


        <Route exact path="/dashboard/event/create">
          <Helmet>
            <title>Create Event</title>
          </Helmet>
          <CreateEvent />
        </Route>

        <Route exact path="/dashboard/event/view">
          <Helmet>
            <title>List Event</title>
          </Helmet>
          < EventLists />
        </Route>


        <Route exact path="/dashboard/gallery/create">
          <Helmet>
            <title>Create Gallery</title>
          </Helmet>
          <CreateGallery />
        </Route>


        <Route path="/dashboard/user/:id">
          <Helmet>
            <title>User</title>
          </Helmet>
          <User />
        </Route>
        {/* SERMON ############################################ */}
        <Route path="/dashboard/sermon/create">
          <Helmet>
            <title>Create Sermon</title>
          </Helmet>
          <CreateSermon />
        </Route>
        <Route path="/dashboard/sermon/view">
          <Helmet>
            <title>View Sermon</title>
          </Helmet>
          <SermonList />
        </Route>


        <Route path="/dashboard/cell/create">
          <Helmet>
            <title>Create Cell</title>
          </Helmet>
          <CreateCell />
        </Route>

        {/* 404 ERROR ROUTE ########################################################*/}
        <Route path="*">
          <Helmet>
            <title>404</title>
          </Helmet>
          <Error404Page />
        </Route>
        {/* 404 ERROR ROUTE #######################################################*/}
      </Switch>
    </Fragment>
  );
};

export default Routes;
