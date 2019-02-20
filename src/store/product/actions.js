export default class ProductActions{

    static PRODUCT_START = 'PRODUCT_START';
    static PRODUCT_SET = 'PRODUCT_SET';
    static PRODUCT_FAIL = 'PRODUCT_FAIL';

    static productStart = () => {
        return {
            type: ProductActions.PRODUCT_START
        };
    };

    static productSet = products => {
        return {
            type: ProductActions.PRODUCT_SET,
            productsList: products,
        };
    };

    static productFail = (error) => {
        return {
            type: ProductActions.PRODUCT_FAIL,
            error: error
        };
    };

}