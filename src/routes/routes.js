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

        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        <PrivateRoute exact path="/livestream/create" component={LiveStream} roles={[Role.Admin]} />

        <PrivateRoute exact path="/dashboard/member/create" component={CreateMember} roles={[Role.Admin]} />

        <PrivateRoute exact path="/dashboard/gpa/create" component={CreateCourse} />

        <PrivateRoute exact path="/dashboard/gpa/view" component={CourseLists} />

        <PrivateRoute exact path="/dashboard/gpa/view/:title/:id" component={CreateLesson} />

        <PrivateRoute exact path="/dashboard/gpa/lesson/create/:id" component={CreateLesson} />

        <PrivateRoute exact path="/dashboard/gpa/assignment/:id" component={CreateAssignment} />

        <PrivateRoute exact path="/dashboard/gpa/candidates" component={CandidateLists} />

        <PrivateRoute exact path="/dashboard/event/create" component={CreateEvent} />

        <PrivateRoute exact path="/dashboard/event/view" component={EventLists} />

        <PrivateRoute exact path="/dashboard/gallery/create" component={CreateGallery} />

        <PrivateRoute exact path="/dashboard/user/:id" component={User} />

        <PrivateRoute exact path="/dashboard/sermon/create" component={CreateSermon} />

        <PrivateRoute path="/dashboard/sermon/view" component={SermonList} />

        <PrivateRoute exact path="/dashboard/cell/create" component={CreateCell} />

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
