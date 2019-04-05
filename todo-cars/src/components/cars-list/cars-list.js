import React, { Component } from 'react';
import CarsItem from '../cars-item';
import './cars-list.css';

export default class CarsList extends Component {
    render() {
        const { cars, deleteCar } = this.props;
        const elements = cars.map((car) => {
            return <CarsItem key={car.id} car={car} onDeleteAction={() => deleteCar(car.id)} />
        });

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">Price</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { elements }
                </tbody>
            </table>
        );
    }
}