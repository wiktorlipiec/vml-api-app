import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import AuthMiddleware from '../store/auth/middleware';

import Auth from '../containers/Auth/Auth';
import Products from '../containers/Products/Products';

class App extends Component {

    componentDidMount () {
        this.props.startAuth("admin","vml")
    }
    
    render(){
        let routes = (
            <Switch>
              <Route path="/" exact component={ Auth } />
              <Redirect to="/" />
            </Switch>
        );

        if ( this.props.isAuthenticated ) {
            routes = (
              <Switch>
                <Route path="/" component={ Products } />
                <Redirect to="/" />
              </Switch>
            );
        }

        return(
            <div>
                { routes }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startAuth: (login,password) => dispatch( AuthMiddleware.auth(login,password) )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App));