import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ User, component: Component, roles, ...rest }) => (
    // console.log(rest),
    <Route {...rest} component={(props) => (
        User.isAuthenticated === true ? (
            <Component {...rest} />
        ) : (
                <Redirect to={{ pathname: "/" }} />
            )
    )} />
);

const mapStateToProps = (state) => ({
    User: state.User,
});
// export default connect(mapStateToProps, null)(PrivateRoute);

export default connect(mapStateToProps)(PrivateRoute);