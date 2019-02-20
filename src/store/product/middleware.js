import ProductActions from './actions';
import axios from 'axios';

export default class ProductMiddleware {

    static product = () => {
        return dispatch => {
            dispatch(ProductActions.productStart());

            const tokenId = localStorage.getItem('token');

            axios({
                method: "get",
                url: `https://vml-recruit-task.herokuapp.com/api/v1/products?token=${tokenId}`,
            })
            .then(response => {
                console.log(response);
                dispatch(ProductActions.productSet(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(ProductActions.productFail(err.data));
            });
        }
    };
};