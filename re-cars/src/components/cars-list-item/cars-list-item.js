import React from 'react';

import './cars-list-item.css';

const CarsListItem = (props) => {
    const { onUpdateAction, onDeleteAction } = props;
    const { id, make, model, price } = props.car;

    return (
        <div className="cars-list-item">
            <span>{id} {make} {model} {price}</span>
            <button onClick={onUpdateAction}>update</button>
            <button onClick={onDeleteAction}>delete</button>
        </div>
    );
};

export default CarsListItem;