import ProductActions from './actions';

const INITIAL_STATE = {
    products: {},
    loading: false,
    error: null,
}

function ProductReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ProductActions.PRODUCT_START:
            return state = {
                ...state,
                loading: true,
            };
        case ProductActions.PRODUCT_SET:
            return state = {
                ...state,
                loading: false,
                products: action.productsList,
            };
        case ProductActions.PRODUCT_FAIL:
            return state = {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default ProductReducer;