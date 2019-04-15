import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

import './error.css'

const Error = (props) => {
    const { title, message } = props;
    return (
        <div className="error">
            <SvgIcon fontSize="large">
                <path color="red" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </SvgIcon>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
};

export default Error;