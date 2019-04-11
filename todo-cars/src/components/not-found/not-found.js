import React from 'react';
import { Link } from 'react-router-dom'

import './not-found.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/"><button className="btn btn-outline-secondary">Return to main page</button></Link>
        </div>
    );
};

export default NotFound;