import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../hoc/Layout/Layout';

import Toolbar from '../../components/Toolbar/Toolbar';
import Container from '../../hoc/Container/Container';
import Product from '../../components/Product/Product';
import Modal from '../../components/Modal/Modal';

import { connect } from 'react-redux';
import ConfigMiddleware from '../../store/config/middleware';
import ProductMiddleware from '../../store/product/middleware';

class Products extends Component {
    static propTypes = {
        startConfig: PropTypes.func.isRequired,
        setProduct: PropTypes.func.isRequired,
        configSetup:PropTypes.object.isRequired,
        productsList:PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = { 
            showModal: false,
            modalContent: {
                image: '',
                product: '',
                desc: ','
            },
        };
    }

    componentDidMount () {
        this.props.startConfig();
        this.props.setProduct();
    }

    showModalClick = (image, product, desc) => {
        this.setState({
            showModal: true,
            modalContent: {
                ...this.state.modalContent,
                image: image,
                product: product,
                desc: desc,
            }
        });
    }

    hideModalClick = () => {
        this.setState({
            showModal: false,
        });
    }

    render(){
        const { configSetup,productsList } = this.props
        const { modalContent, showModal } = this.state;

        return(
            <Layout>
                <Toolbar colorToolbar={configSetup.color} name={ configSetup.user }/>
                <Container>
                    {productsList.products.length && productsList.products.map((item, index) =>
                         <Product 
                                onClickHandler={ () => this.showModalClick(item.imageUrl,item.productName,item.desc) } 
                                key={ index } 
                                nameProduct={ item.productName} 
                                imageProduct={ item.imageUrl }/>
                    )};
                </Container>
                {showModal && <Modal onClickHandler={ () => this.hideModalClick() } imageProduct={ modalContent.image } title={ modalContent.product } description={ modalContent.desc} />}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
      configSetup: state.config.config,
      productsList: state.product
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startConfig: () => dispatch( ConfigMiddleware.config() ),
        setProduct: () => dispatch( ProductMiddleware.product() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Products);