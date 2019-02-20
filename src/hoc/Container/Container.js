import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    position: relative;
    max-width: 1170px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-top: 100px;
`

const Container = props => (
    <ContainerWrapper>
        { props.children }
    </ContainerWrapper>
);

export default Container;