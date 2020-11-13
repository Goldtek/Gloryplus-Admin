import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import {
  Login,
  Dasboard,
  ContactUs,
  Error404Page,
  CreateCourse,
  LiveStream,
  Profile,
  ListCourse,
  FirstTimers,
  // SecondTimers,
  CreateEvent,
  ListEvent,
  CreateBranch,
  CreateGallery,
  ViewGallery,
  NewUser
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

        <Route path="/contactus">
          <ContactUs />
        </Route>

        {/* GENERAL ROUTE - NONE PROTECTED ############################################*/}

        {/* PROTECTED ROUTES START HERE #############################################*/}
        <Route exact path="/dashboard">
          <Dasboard />
        </Route>

        <Route path="/dashboard/first-timers">
          <FirstTimers />
        </Route>

        <Route path="/dashboard/mvp/newuser">
          <NewUser />
        </Route>

        <Route path="/dashboard/gpa/create">
          <CreateCourse />
        </Route>

        <Route path="/dashboard/gpa/view">
          <ListCourse />
        </Route>

        <Route path="/dashboard/event/create">
          <CreateEvent />
        </Route>

        <Route path="/dashboard/event/view">
          <ListEvent />
        </Route>

        <Route path="/dashboard/livestream">
          <LiveStream />
        </Route>
        <Route path="/dashboard/profile">
          <Profile />
        </Route>

        <Route path="/dashboard/branch/create">
          <CreateBranch />
        </Route>


        <Route path="/dashboard/gallery/create">
          <CreateGallery />
        </Route>

        <Route path="/dashboard/gallery/view">
          <ViewGallery />
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
