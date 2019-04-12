const carsRequested = () => {
    return {
        type: 'FETCH_CARS_REQUESTED',
    };
}

const carsLoaded = (newCars) => {
    return {
        type: 'FETCH_CARS_SUCCESS',
        payload: newCars
    };
};

const carsError = (error) => {
    return {
        type: 'FETCH_CARS_FAILURE',
        payload: error
    };
};

const updateCar = (carId) => {
    return {
        type: 'UPDATE_CAR',
        payload: carId
    };
};

const deleteCar = (carId) => {
    return {
        type: 'DELETE_CAR',
        payload: carId
    };
}

export {
    carsRequested,
    carsLoaded,
    carsError,
    updateCar,
    deleteCar
};