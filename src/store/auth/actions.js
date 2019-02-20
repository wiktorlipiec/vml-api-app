export default class AuthActions {

    static AUTH_START = 'AUTH_START';
    static AUTH_SUCCESS = 'AUTH_SUCCESS';
    static AUTH_FAIL = 'AUTH_FAIL';

    static authStart = () => {
        return {
            type: AuthActions.AUTH_START
        };
    };

    static authSuccess = token => {
        return {
            type: AuthActions.AUTH_SUCCESS,
            idToken: token,
        };
    };

    static authFail = (error) => {
        return {
            type: AuthActions.AUTH_FAIL,
            error: error
        };
    };

}