import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    width: 20%;
    height: 300px;
    margin: 15px;
    background-image: url(${props => props.background});
    box-shadow: -2px -1px 14px -4px rgba(0,0,0,0.75);
    cursor: pointer;
    transition: transform .3s;

    @media (max-width: 768px) {
        width: 40%;
        height: 200px;
    }

    &:hover{
        transform: scale(1.05);
    }
`

const ProductNameWrapper = styled.div`
    display: block;
    width: 100%;
    background-color: rgba(255,255,255,.2);
`

const ProductName = styled.h2`
    padding: 10px 15px;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`


const Product = props => (
    <ProductWrapper onClick={ props.onClickHandler } background={ props.imageProduct }>
        <ProductNameWrapper>
            <ProductName>
                { props.nameProduct }
            </ProductName>
        </ProductNameWrapper>
    </ProductWrapper>
);

Product.propTypes = {
    onClickHandler: PropTypes.func,
    imageProduct: PropTypes.string,
    nameProduct: PropTypes.string,
}

export default Product;