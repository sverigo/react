import React, { Component } from 'react';

import AppHeader from '../app-header';
import CarsList from '../cars-list';

import CarsService from '../../services/cars-service';

import './app.css';

export default class App extends Component {
    carsService = new CarsService();

    state = {
        cars: []
    };

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            this.updateData();
        }
    }

    createCar = (car) => {
        this.carsService.create(car)
            .then((data) => {
                this.updateData();
            });
    };

    updateCar = (car) => {
        this.carsService.update(car)
            .then((data) => {
                this.updateData();
            })
    }

    deleteCar = (id) => {
        this.carsService.delete(id)
            .then((data) => {
                this.updateData();
            });
        
    };

    updateData() {
        this.carsService.getCarsList()
            .then((data) => {
                this.setState({ cars: data })
            });
        
    }

    render() {
        const { cars } = this.state;

        return (
            <div className="app">
                <AppHeader count={cars.length} history={this.props.history} createCar={this.createCar} />
                <CarsList cars={cars} history={this.props.history} deleteCar={this.deleteCar} />
            </div>
        );
    }
}