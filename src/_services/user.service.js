// // import { authHeader } from '../_helpers';
// const API_URL = process.env.REACT_APP_BASEURL;
// export const userService = { register };


// const register = (user) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${API_URL}/users/register`, requestOptions).then(handleResponse);
// }


// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }


// const handleResponse = (response) => {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }



// export const authenticationService = {
//     userLogout
// };

export const userLogout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
