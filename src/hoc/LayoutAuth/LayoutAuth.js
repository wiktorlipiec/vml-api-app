import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

    html { 
        font-size: 62.5%; 
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

const AppWrapper = styled.div`
    position:relative;
    min-height: 100vh;
    width: 100%;
    color: white;
`

const LayoutAuth = props => (
    <AppWrapper>
        <GlobalStyles />
        { props.children }
    </AppWrapper>
);

export default LayoutAuth;