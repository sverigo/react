import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarsListItem from '../cars-list-item';
import Loading from '../loading';
import Error from '../error';
import { withCarsService } from '../helpers';
import { carsLoaded, carsRequested, carsError, deleteCar } from '../../actions/actions';

import './cars-list.css';

class CarsList extends Component {
    componentDidMount() {
        const { carsService, carsLoaded, carsRequested, carsError } = this.props;
        carsRequested();
        carsService.getCarsList()
            .then((data) => carsLoaded(data))
            .catch((error) => carsError(error));
    }

    render() {
        const { cars, loading, error, deleteCar } = this.props;

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <Error />
        }

        return (
            <div>
                <ul className="cars-list">
                    {
                        cars.map((car) => {
                            return (
                                <li key={car.id}>
                                    <CarsListItem car={car} onUpdateAction={() => this.redirectToUpdate(car.id)}
                                        onDeleteAction={() => deleteCar(car.id)} />
                                </li>
                            );
                        })
                    }
                </ul>
                <button onClick={this.redirectToCreate}>Create</button>
            </div>

        );
    }

    redirectToCreate = () => {
        this.props.history.push('/create');
    };

    redirectToUpdate = (id) => {
        this.props.history.push('/update/' + id);
    };
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = {
    carsRequested,
    carsLoaded,
    carsError,
    deleteCar
}

export default withCarsService()(connect(mapStateToProps, mapDispatchToProps)(CarsList));