import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../loading';
import Error from '../error';
import { pageIsLoading, fetchError, setCurrentCar, createCar, updateCar } from '../../actions/actions';

import './action-form.css';

class ActionForm extends Component {
    state = {
        id: null,
        make: '',
        model: '',
        price: ''
    };

    componentDidMount() {
        pageIsLoading();
        const id = this.props.match.params.id;
        if (id) {
            this.props.setCurrentCar(id).catch(() => {
                this.props.fetchError('Failed to load');
            });
        }
    }

    componentWillReceiveProps(props) {
        const currentCar = props.currentCar;

        if (currentCar) {
            this.setState({
                id: this.props.match.params.id,
                make: currentCar.make,
                model: currentCar.model,
                price: currentCar.price
            });
        }
    }

    render() {

        if (this.props.loading) return <Loading />

        if (this.props.error) return <Error title="404 - Not Found" message="Requested address doesn't exist"  />

        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="make" type="text" value={this.state.make} onChange={this.handleChange} />
                    <input name="model" type="text" value={this.state.model} onChange={this.handleChange} />
                    <input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
                    <button>OK</button>
                    <button type="button" onClick={this.handleCancel}>Cancel</button>
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

    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        loading: state.loading,
        currentCar: state.currentCar
    };
};

const mapDispatchToProps = {
    pageIsLoading,
    fetchError,
    setCurrentCar,
    createCar,
    updateCar
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);