import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import {
  Login,
  Dasboard,
  Recover,
  ContactUs,
  FirstTimers,
  Error404Page,
  CreateCourse,
  LiveStream,
  Profile,
} from "./components/pages";
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

        <Route path="/recover">
          <Recover />
        </Route>

        <Route path="/contactus">
          <ContactUs />
        </Route>

        {/* GENERAL ROUTE - NONE PROTECTED ############################################*/}

        {/* PROTECTED ROUTES START HERE #############################################*/}
        <Route exact path="/dashboard">
          <Dasboard />
        </Route>

        <Route path="/first-timers">
          <FirstTimers />
        </Route>

        <Route path="/dashboard/create-course">
          <CreateCourse />
        </Route>
        <Route path="/dashboard/livestream">
          <LiveStream />
        </Route>
        <Route path="/dashboard/profile">
          <Profile />
        </Route>
        {/* PROTECTED ROUTES START HERE #############################################*/}

        {/* 404 ERROR ROUTE ########################################################*/}
        <Route path="*">
          <Error404Page />
        </Route>
        {/* 404 ERROR ROUTE #######################################################*/}
      </Switch>
    </Fragment>
  );
};

export default Routes;
