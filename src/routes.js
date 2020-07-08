import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import {
  Login,
  Dasboard,
  Error404Page,
  CreateCourse,
  LiveStream,
  User,
  ListCourse,
  CreateMember,
  CreateEvent,
  CreateLesson,
  EventLists,
  Register,
  CreateAssignment,
  CreateGallery
} from "./components/custom";

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

        <Route path="/register">
          <Register />
        </Route>

        <Route exact path="/dashboard">
          <Helmet>
            <title>Dashboard</title>
          </Helmet>
          <Dasboard />
        </Route>

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
              <ListCourse {...props} />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/dashboard/gpa/view/:title/:id"
          render={(props) => (
            <Fragment>
              <Helmet>
                <title>List Course</title>
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

        <Route path="/dashboard/livestream">
          <Helmet>
            <title>LiveStream</title>
          </Helmet>
          <LiveStream />
        </Route>

        <Route path="/dashboard/user/:id">
          <Helmet>
            <title>User</title>
          </Helmet>
          <User />
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
