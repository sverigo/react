import React from 'react';

import Icon from '@material-ui/core/Icon';

import './error.css'

const Error = (props) => {
    const { title, message } = props;
    return (
        <div className="error">
            <Icon className="error-icon" size="large">error</Icon>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
};

export default Error;