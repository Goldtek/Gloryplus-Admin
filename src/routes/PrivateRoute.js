import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";

export const PrivateRoute = ({
  component: Component,
  User,
  roles,
  branch,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const auth = User.isAuthenticated;
      const role = User.user.role;
      console.log(User);
      if (auth === false) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: "/" }} />;
      }

      // check if route is restricted by role
      // if (roles && roles.indexOf(role) === -1) {
        // role not authorised so redirect to home page
        // return <Redirect to={{ pathname: '/' }} />
      //   history.goBack();
      // }

      // if (
      //   role === "FIRST_TIMERS" ||
      //   role === "SECOND_TIMERS" ||
      //   role === "USER"
      // ) {
      //   history.goBack();
      // }

      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  User: state.User,
  branch: state.User.user.branchId,
});
export default connect(mapStateToProps, null)(PrivateRoute);
