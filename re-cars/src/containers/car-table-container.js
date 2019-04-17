import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../components/loading';
import Error from '../components/error';
import CarTable from '../components/car-table';

import { fetchCars, deleteCar } from '../actions/actions';

class CarTableContainer extends Component {
    state = {
        isDialogOpen: false,
        id: null,
        pagination: {
            rowsPerPage: 5,
            rowsPerPageOptions: [5, 10, 15, 20],
            page: 0,
            count: 0,
            displayedCars: []
        }
    };

    componentDidMount() {
        const { fetchCars } = this.props;
        fetchCars();
    }

    componentWillReceiveProps(props) {
        this.setState((prevState) => {
            return {
                ...this.state,
                pagination: {
                    ...this.state.pagination,
                    count: props.cars.length,
                    displayedCars: props.cars.slice(0, prevState.pagination.rowsPerPage)
                }
            };

        })
    }

    handleChangePage = (event, page) => {
        this.setState((prevState, props) => {
            const { rowsPerPage } = prevState.pagination;
            const startPos = rowsPerPage * page;
            return {
                ...this.state,
                pagination: {
                    ...this.state.pagination,
                    page,
                    displayedCars: props.cars.slice(startPos, startPos + rowsPerPage)
                }
            };
        });
    };

    handleChangeRowsPerPage = (event) => {
        const rowsPerPage = event.target.value;

        this.setState((prevState, props) => {
            const { page } = prevState.pagination;
            const startPos = rowsPerPage * page;

            return {
                ...this.state,
                pagination: {
                    ...this.state.pagination,
                    page,
                    rowsPerPage,
                    displayedCars: props.cars.slice(startPos, startPos + rowsPerPage)
                }
            };
        });
    };

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
        const { loading, error } = this.props;

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
                onUpdate={this.redirectToUpdate}
                onCreate={this.redirectToCreate}
                state={this.state}
                handleDialogOpen={this.handleDialogOpen}
                handleDialogClose={this.handleDialogClose}
                handleDialogConfirm={this.handleDialogConfirm}
                handleChangePage={this.handleChangePage}
                handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        loading: state.loading,
        error: state.error,
        carsPagination: state.carsPagination
    };
};

const mapDispatchToProps = {
    fetchCars,
    deleteCar
}

export default connect(mapStateToProps, mapDispatchToProps)(CarTableContainer);