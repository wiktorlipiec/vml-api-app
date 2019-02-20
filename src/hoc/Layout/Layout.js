import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';
import background from '../../assets/images/pexels-photo-1070880.jpeg';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

    html { 
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    h2{
        color: white;
        font-size: 2rem;
    }
`;

const AppWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const Layout = props => (
    <AppWrapper>
        <GlobalStyles />
        { props.children }
    </AppWrapper>
);

export default Layout;