import AuthActions from './actions';
import axios from 'axios';

export default class AuthMiddleware {

    static auth = (login,password) => {
        return dispatch => {
            dispatch(AuthActions.authStart());

            const authData = {
                "login": login,
                "pass": password
            }

            axios({
                method: 'post',
                url: 'https://vml-recruit-task.herokuapp.com/api/auth',
                data: authData,
             })
             .then(response => {
                 console.log(response);
                 localStorage.setItem('token', response.data);
                 dispatch(AuthActions.authSuccess(response.data));
             })
             .catch(err => {
                 console.log(err);
                 dispatch(AuthActions.authFail(err.data));
             });
        }
    };
};