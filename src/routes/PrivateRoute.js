import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthenticated, component: Component, roles, ...rest }) => (
    // console.log(rest),
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Component {...rest} />
        ) : (
                <Redirect to={{ pathname: "/" }} />
            )
    )} />
);

const mapStateToProps = ({ User: { isAuthenticated } }) => ({
    isAuthenticated: isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);