import React, { Component } from 'react';

import CarsService from '../../services/cars-service';

import './action-form.css';

export default class ActionForm extends Component {
    carsService = new CarsService();

    state = {
        id: null,
        make: '',
        model: '',
        price: '',
        errors: {
            make: '',
            model: '',
            price: ''
        }
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== undefined) {
            this.carsService.getCarById(id)
                .then((data) => {
                    this.setState(data);
                });
        }
    }

    render() {
        return (
            <form className="action-form card" onSubmit={this.handleSubmit} noValidate>
                <h1>Form</h1>
                <div className="form-group">
                    <label>Make:</label>
                    <input type="text" className="form-control" name="make" value={this.state.make} onChange={this.handleChange} noValidate />
                    <span className="invalid-message">{this.state.errors.make}</span>
                </div>
                <div className="form-group">
                    <label>Model:</label>
                    <input type="text" className="form-control" name="model" value={this.state.model} onChange={this.handleChange} noValidate />
                    <span className="invalid-message">{this.state.errors.model}</span>
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="number" className="form-control" name="price" value={this.state.price} onChange={this.handleChange} noValidate />
                    <span className="invalid-message">{this.state.errors.price}</span>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-outline-secondary">OK</button> 
                    <button type="button" className="btn btn-outline-secondary" onClick={this.onCancelAction}>Cancel</button>
                </div>
            </form>
        );
    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch(name) {
            case 'make':
                errors.make = value.length < 3 ? 'Minumum 3 characters required!' : '';
                break;
            case 'model':
                errors.model = value.length < 3 ? 'Minumum 3 characters required!' : '';
                break;
            case 'price':
                errors.price = !this._isNumber(value) ? 'Entered value must be number!' : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this._formValid(this.state)) {
            console.error('validation error!');
        } else {
            this.setState({id: this.carsService.lastId});

            if (this.state.id === null) this.carsService.create(this.state);
            else this.carsService.update(this.state);

            this.props.history.push('/');
        }
    };

    _formValid = ({ errors, id, ...rest }) => {
        let valid = true;

        Object.values(errors).forEach(value => {
            value.length > 0 && (valid = false);
        });

        Object.values(rest).forEach(value => {
            value === '' && (valid = false);
        });

        return valid;
    };

    _isNumber = (value) => {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };

    onCancelAction = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    };
}