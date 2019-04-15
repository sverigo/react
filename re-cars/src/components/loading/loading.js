import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import './loading.css';

const Loading = () => {
    return (
        <div className="loading" >
            <CircularProgress className="loading-spinner" size={48} />
        </div>
    );
};

export default Loading;