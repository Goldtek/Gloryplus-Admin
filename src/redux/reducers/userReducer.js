import {
    LOG_OUT, LOGIN_SUCCESS, STORE_USER_ERROR_MSG
} from '../actions/action-types';


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isAuthenticated: true, user } : {
    user: {},
    errorMessage: '',
    isAuthenticated: false,
};


// const initialState = {
//     user: {},
//     errorMessage: '',
//     isAuthenticated: false,
// };

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:

            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.user,
            };

        case STORE_USER_ERROR_MSG:

            return {
                ...state,
                errorMessage: action.message,
            };

        case LOG_OUT:
            return {
                ...initialState,
                isAuthenticated: false,
            };


        default:
            return state;
    }
};


export default UserReducer;
