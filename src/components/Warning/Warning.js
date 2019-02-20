import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WarningWrapper = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 30px 50px;
    background-color: rgba(0, 29, 76, .5);
    box-shadow: -2px -1px 14px -4px rgba(0,0,0,0.75);
`

const WarningText = styled.h2`
    font-size: 2rem;
    text-align: center;
`

const Warning = props => (
    <WarningWrapper>
        <WarningText>
            { props.warningText }
        </WarningText>
    </WarningWrapper>
);

Warning.propTypes = {
    warningText: PropTypes.string,
}

export default Warning;