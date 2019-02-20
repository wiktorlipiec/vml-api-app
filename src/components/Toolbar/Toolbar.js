import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NameUser from '../NameUser/NameUser';

const ToolbarWrapper = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items:center;
    position: absolute;
    height: 80px;
    width: 100%;
    left:0;
    top:0;
    padding: 0 30px;
    margin: 0 auto;
    background-color: ${props => props.background};
    box-shadow: -2px -1px 14px -4px rgba(0,0,0,0.75);
`

const Toolbar = props => (
    <ToolbarWrapper background={ props.colorToolbar }>
        <NameUser name={ props.name } />
    </ToolbarWrapper>
);

Toolbar.propTypes = {
    colorToolbar: PropTypes.string,
    name: PropTypes.string,
}

export default Toolbar;