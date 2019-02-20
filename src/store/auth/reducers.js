import AuthActions from './actions';

const INITIAL_STATE = {
    isAuthenticated: false,
    loading: false,
    token: null,
    error: null,
}

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActions.AUTH_START:
            return state = {
                ...state,
                loading: true,
            };
        case AuthActions.AUTH_SUCCESS:
            return state = {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: action.idToken,
            };
        case AuthActions.AUTH_FAIL:
            return state = {
                ...state,
                isAuthenticated: false,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default AuthReducer;