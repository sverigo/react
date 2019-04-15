import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionForm from '../components/action-form/action-form';
import Loading from '../components/loading';
import Error from '../components/error';
import { pageIsLoading, pageIsLoaded, fetchError, setCurrentCar, createCar, updateCar } from '../actions/actions';


class ActionFormContainer extends Component {
    state = {
        id: null,
        make: '',
        model: '',
        price: '',
        validateErrors: {
            make: '',
            model: '',
            price: ''
        }
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.setCurrentCar(id).catch(() => {
                this.props.fetchError('Failed to load');
            });
        } else {
            this.props.pageIsLoaded();
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

        if (this.props.error) return <Error title="404 - Not Found" message="Requested address doesn't exist" />

        return <ActionForm state={this.state} handleCancel={this.handleCancel}
            handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this._formValid(this.state)) {
            console.log('validation error');
        } else {
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
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const { validateErrors } = this.state;

        switch (name) {
            case 'make':
                validateErrors.make = value.length < 3 ? 'Minumum 3 characters required!' : '';
                break;
            case 'model':
                validateErrors.model = value.length < 3 ? 'Minumum 3 characters required!' : '';
                break;
            case 'price':
                validateErrors.price = !this._isNumber(value) ? 'Entered value must be number!' : '';
                break;
            default:
                break;
        }

        this.setState({ [name]: value });
    };

    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    };

    _formValid = (state) => {
        const { validateErrors, id, ...rest } = state;
        let valid = true;

        Object.values(validateErrors).forEach(value => {
            value.length > 0 && (valid = false)
        });

        Object.values(rest).forEach(value => {
            value === '' && (valid = false);
        });

        return valid;
    }

    _isNumber = (value) => {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
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
    pageIsLoaded,
    fetchError,
    setCurrentCar,
    createCar,
    updateCar
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionFormContainer);