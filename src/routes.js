import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import {
  Login,
  Dasboard,
  Error404Page,
  CreateCourse,
  LiveStream,
  Profile,
  ListCourse,
  FirstTimers,
  // SecondTimers,
  CreateEvent,
  CreateLesson,
  ListEvent,
  Register
} from "./components/custom";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        {/* GENERAL ROUTE - NONE PROTECTED #########################################*/}

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

        {/* GENERAL ROUTE - NONE PROTECTED ############################################*/}




        {/* PROTECTED ROUTES START HERE #############################################*/}
        <Route exact path="/dashboard">
          <Helmet>
            <title>Dashboard</title>
          </Helmet>
          <Dasboard />
        </Route>

        <Route path="/dashboard/first-timers">
          <Helmet>
            <title>First Timer</title>
          </Helmet>
          <FirstTimers />
        </Route>
        {/* COURSE ROUTE STARTS HERE */}
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
        {/* COURSE ROUTES ENDS HERE */}
        <Route
          exact
          path="/dashboard/gpa/lesson/create/:id"
          render={(props) => <CreateLesson {...props} />}
        />


        <Route
          exact
          path="/dashboard/gpa/assignment/create/:id"
          render={(props) => <CreateLesson {...props} />}
        />


        {/* EVENT ROUTES STARTS HERE*/}
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
          <ListEvent />
        </Route>
        {/* EVENT ROUTES END HERE */}

        {/* LIVESTREAM ROUTES STARTS HERE */}
        <Route path="/dashboard/livestream">
          <Helmet>
            <title>LiveStream</title>
          </Helmet>
          <LiveStream />
        </Route>
        {/* LIVE STREAM ENDS HERE */}
        <Route path="/dashboard/profile">
          <Helmet>
            <title>Profile</title>
          </Helmet>
          <Profile />
        </Route>
        {/* PROTECTED ROUTES START HERE #############################################*/}

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
