import AuthActions from './actions';
import axios from 'axios';

export default class AuthMiddleware {

    static auth = (login,pass) => {
        return dispatch => {
            dispatch(AuthActions.authStart());

            const authData = { login,pass }

            axios({
                method: 'post',
                url: 'https://vml-recruit-task.herokuapp.com/api/auth',
                data: authData,
             })
                .then(response => {
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