import React, { Component } from 'react';

import AppHeader from '../app-header';
import CarsList from '../cars-list';

import CarsService from '../../services/cars-service';

import './app.css';

export default class App extends Component {

    carsService = new CarsService();

    state = {
        cars: [
            { id: 1, make: 'Nissal', model: 'Leaf', price: 15999 },
            { id: 2, make: 'Tesla', model: 'Model X', price: 57699 },
            { id: 3, make: 'BMW', model: 'I3', price: 45000 }
        ]
    };

    deleteCar = (id) => {
        const newCars = [...this.state.cars];
        const index = newCars.findIndex((e) => e.id === id);
        newCars.splice(index, 1);
        this.setState({ cars: newCars });
    }

    test = () => {
        this.carsService.getResource()
            .then((data) => {
                console.log(data);
                this.setState({ cars: data })
            });
    }

    render() {
        const { cars } = this.state;

        return (
            <div className="app">
                <AppHeader count={cars.length} />
                <CarsList cars={cars} deleteCar={this.deleteCar} />
                <button onClick={this.test}>test</button>
            </div>
        );
    }
}