import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
console.log(localStorage.getItem('courses'))
// const isAuthenticated = true



export const PrivateRoute = ({ component: Component, User, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const auth = User.isAuthenticated
        const role = User.user.role
        console.log(roles)
        if (auth === false) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: "/" }} />
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(role) === -1) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/' }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)



const mapStateToProps = (state) => ({
    User: state.User,
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