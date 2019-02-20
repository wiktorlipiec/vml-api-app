import ConfigActions from './actions';
import axios from 'axios';

export default class ConfigMiddleware {

    static config = () => {
        return dispatch => {
            dispatch(ConfigActions.configStart());

            const tokenId = localStorage.getItem('token');

            axios({
                method: "get",
                url: `https://vml-recruit-task.herokuapp.com/api/v1/config?token=${tokenId}`,
            })
                .then(response => {
                    dispatch(ConfigActions.configSet(response.data));
                })
                .catch(err => {
                    console.log(err);
                     dispatch(ConfigActions.configFail(err.data));
                });
        }
    };
};