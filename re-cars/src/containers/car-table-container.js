import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../components/loading';
import Error from '../components/error';
import CarTable from '../components/car-table';

import { pageIsLoading, fetchCars, deleteCar } from '../actions/actions';

class CarTableContainer extends Component {
    componentDidMount() {
        const { pageIsLoading, fetchCars } = this.props;
        pageIsLoading();
        fetchCars();
    }

    redirectToCreate = () => {
        this.props.history.push('/create');
    };

    redirectToUpdate = (id) => {
        this.props.history.push('/update/' + id);
    };

    render() {
        const { cars, loading, error, deleteCar } = this.props;

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <Error title="Something was wrong!" message="Failed to fetch data from database" />
        }

        return <CarTable cars={cars} onDelete={deleteCar} onUpdate={this.redirectToUpdate} onCreate={this.redirectToCreate} />
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = {
    pageIsLoading,
    fetchCars,
    deleteCar,
}

export default connect(mapStateToProps, mapDispatchToProps)(CarTableContainer);