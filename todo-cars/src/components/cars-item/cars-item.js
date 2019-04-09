import React, { Component } from 'react';

import './cars-item.css';

export default class CarsItem extends Component {
    render() {

        const { car, onUpdateAction, onDeleteAction } = this.props;

        return (
            <tr>
                <th className="align-middle" scope="row">{car.id}</th>
                <td className="align-middle">{car.make}</td>
                <td className="align-middle">{car.model}</td>
                <td className="align-middle">{car.price}$</td>
                <td><button className="btn btn-outline-secondary" onClick={onUpdateAction}>Update</button></td>
                <td><button className="btn btn-outline-secondary" onClick={onDeleteAction}>Delete</button></td>
            </tr>
        );
    }
}