import React from 'react';
import PropTypes from 'prop-types';

const NameUser = props => (
    <div className="name-user">
        <h2>{ props.name }</h2>
    </div>
);

NameUser.propTypes = {
    name: PropTypes.string,
}

export default NameUser;