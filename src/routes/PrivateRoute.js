import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
// console.log(localStorage.getItem('courses'))
// const isAuthenticated = trues

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
      const branch = props.match.params.brId;
      const auth = User.isAuthenticated;
      const role = User.user.role;
      // console.log(branch)
      if (auth === false) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: "/" }} />;
      }

      // check if route is restricted by role
      if (roles && roles.indexOf(role) === -1) {
        // role not authorised so redirect to home page
        // return <Redirect to={{ pathname: '/' }} />
        history.goBack();
      }

      if (
        role === "FIRST_TIMERS" ||
        role === "SECOND_TIMERS" ||
        role === "FULL_MEMBER"
      ) {
        // console.log('invalid location')
        history.goBack();
      }
      // if (branch !== User.user.brId) {
      //     // console.log('invalid location')
      //     history.goBack()
      // }
      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  User: state.User,
  branch: state.User.user.branchId,
});
export default connect(mapStateToProps, null)(PrivateRoute);

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// const PrivateRoute = ({ User, component: Component, roles, ...rest }) => (
//     // console.log(rest),
//     <Route {...rest} component={(props) => (
//         User.isAuthenticated === true ? (
//             <Component {...rest} />
//         ) : (
//                 <Redirect to={{ pathname: "/" }} />
//             )
//     )} />
// );

// const mapStateToProps = (state) => ({
//     User: state.User,
// });
// // export default connect(mapStateToProps, null)(PrivateRoute);

// export default connect(mapStateToProps)(PrivateRoute);
