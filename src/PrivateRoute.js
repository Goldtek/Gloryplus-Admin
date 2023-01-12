import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // Check if the user is authenticated
      const isAuthenticated = false; // Replace this with the actual authentication check
      if (isAuthenticated) {
        // If the user is authenticated, render the component
        return <Component {...props} />;
      } else {
        // If the user is not authenticated, redirect to the login page
        return <Redirect to="/" />;
      }
    }}
  />
);

export default PrivateRoute;