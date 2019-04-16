import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../components/loading';
import Error from '../components/error';
import CarTable from '../components/car-table';

import { pageIsLoading, fetchCars, deleteCar } from '../actions/actions';

class CarTableContainer extends Component {
    state = {
        isDialogOpen: false,
        id: null
    };

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

    handleDialogOpen = (id) => {
        this.setState(() => { return { isDialogOpen: true, id } });
    };

    handleDialogClose = () => {
        this.setState(() => { return { isDialogOpen: false, id: null } });
    };

    handleDialogConfirm = () => {
        this.props.deleteCar(this.state.id);
        this.handleDialogClose();
    };

    render() {
        const { cars, loading, error } = this.props;

        if (loading) {
            return <Loading />
        }

        if (error) {
            return (
                <Error
                    title="Something was wrong!"
                    message="Failed to fetch data from database"
                />
            );
        }

        return (
            <CarTable 
                cars={cars}
                onUpdate={this.redirectToUpdate}
                onCreate={this.redirectToCreate}
                state={this.state}
                handleDialogOpen={this.handleDialogOpen}
                handleDialogClose={this.handleDialogClose}
                handleDialogConfirm={this.handleDialogConfirm} 
            />
        );
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