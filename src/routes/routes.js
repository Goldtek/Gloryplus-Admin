import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import PrivateRoute from "./PrivateRoute";
import { Role } from "../_helpers";
import {
  Login,
  ForgotPassword,
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
  CreateCell,
  CreateBranch,
  BranchList,
  Create_Member_MVP,
  MemberLists_MVP,
  FirstTimer,
  PopulateGallery,
  NewUser
} from "../components/pages";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />

        <PrivateRoute exact path="/dashboard/" component={Dashboard} />

        {/* GPA :::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <PrivateRoute
          exact
          path="/dashboard/member/create"
          component={CreateMember}
          roles={[Role.ADMIN, Role.SA]}
        />

        <PrivateRoute
          exact
          path="/dashboard/gpa/create"
          component={CreateCourse}
          roles={[Role.SA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/gpa/view"
          component={CourseLists}
          roles={[Role.SA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/gpa/view/:title/:id"
          component={CreateLesson}
          roles={[Role.SA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/gpa/lesson/create/:id"
          component={CreateLesson}
          roles={[Role.SA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/gpa/assignment/:id"
          component={CreateAssignment}
          roles={[Role.SA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/gpa/candidates"
          component={CandidateLists}
          roles={[Role.SA, Role.ADMIN]}
        />

        {/* GPA :::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* MEDIA STARTS :::::::::::::::::::::::::::::::::::::::::::: */}
        <PrivateRoute
          exact
          path="/dashboard/event/create"
          component={CreateEvent}
          roles={[Role.SA, Role.MEDIA, Role.ADMIN]}
        />
        <PrivateRoute
          exact
          path="/dashboard/:id/gallery"
          component={PopulateGallery}
          roles={[Role.SA, Role.MEDIA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/event/view"
          component={EventLists}
          roles={[Role.SA, Role.MEDIA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/gallery/create"
          component={CreateGallery}
          roles={[Role.SA, Role.MEDIA, Role.ADMIN]}
        />

        <PrivateRoute exact path="/dashboard/:id/user" component={User} />

        <PrivateRoute
          exact
          path="/dashboard/sermon/create"
          component={CreateSermon}
          roles={[Role.SA, Role.MEDIA, Role.ADMIN]}
        />

        <PrivateRoute
          path="/dashboard/sermon/view"
          component={SermonList}
          roles={[Role.SA, Role.MEDIA, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/livestream/create"
          component={LiveStream}
          roles={[Role.ADMIN, Role.SA, Role.MEDIA]}
        />
        {/* MEDIA  ENDS :::::::::::::::::::::::::::::::::::::::::::: */}

        <PrivateRoute
          exact
          path="/dashboard/cell/create"
          component={CreateCell}
          roles={[Role.SA]}
        />

        {/* MVP :::::::::::::::::::::::::::::::::::::::::::::: */}
        <PrivateRoute
          exact
          path="/dashboard/mvp/create"
          component={Create_Member_MVP}
          roles={[Role.SA, Role.MVP, Role.ADMIN]}
        />
        <PrivateRoute
          exact
          path="/dashboard/mvp/view"
          component={MemberLists_MVP}
          roles={[Role.SA, Role.MVP]}
        />
        <PrivateRoute
          exact
          path="/dashboard/mvp/firsttimer"
          component={FirstTimer}
          roles={[Role.SA, Role.MVP, Role.ADMIN]}
        />

        <PrivateRoute
          exact
          path="/dashboard/mvp/newuser"
          component={NewUser}
          roles={[Role.SA, Role.MVP, Role.ADMIN]}
        />


        {/* MVP :::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* BRANCHES ROUTE ::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <PrivateRoute
          exact
          path="/dashboard/branch/create"
          component={CreateBranch}
          roles={[Role.SA, Role.ADMIN]}
        />
        <PrivateRoute
          exact
          path="/dashboard/branch/view"
          component={BranchList}
          roles={[Role.SA, Role.ADMIN]}
        />

        <Route exact path="/recover" component={ForgotPassword} />

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
