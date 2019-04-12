import React from 'react';

import './cars-list-item.css';

const CarsListItem = (props) => {
    const { id, make, model, price } = props.car;

    return (
        <div className="cars-list-item">
            <span>{id} {make} {model} {price}</span>
            <button>update</button>
            <button>delete</button>
        </div>
    );
};

export default CarsListItem;