import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withCarsService } from '../helpers';
import { setSelectedCar, createCar, updateCar } from '../../actions/actions';

import './action-form.css';

class ActionForm extends Component {

    state = {
        id: null,
        make: '',
        model: '',
        price: ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.setSelectedCar(id).then(() => {
                const selectedCar = this.props.selectedCar;
                this.setState({
                    id,
                    make: selectedCar.make,
                    model: selectedCar.model,
                    price: selectedCar.price
                });
            })
            .catch(() => {
                this.props.history.push('/');
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="make" type="text" value={this.state.make} onChange={this.handleChange} />
                    <input name="model" type="text" value={this.state.model} onChange={this.handleChange} />
                    <input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
                    <button>OK</button>
                </form>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id) {
            this.props.updateCar(this.state).then(() => {
                this.props.history.push('/');
            });
        } else {
            this.props.createCar(this.state).then(() => {
                this.props.history.push('/');
            });
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
}

const mapStateToProps = (state) => {
    return {
        selectedCar: state.selectedCar
    };
}

const mapDispatchToProps = {
    setSelectedCar,
    createCar,
    updateCar
};

export default withCarsService()(connect(mapStateToProps, mapDispatchToProps)(ActionForm));