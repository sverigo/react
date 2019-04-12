const carsRequested = () => {
    return {
        type: 'FETCH_CARS_REQUESTED',
    }
}

const carsLoaded = (newCars) => {
    return {
        type: 'FETCH_CARS_SUCCESS',
        payload: newCars
    }
};

const carsError = (error) => {
    return {
        type: 'FETCH_CARS_FAILURE',
        payload: error
    }
}

export {
    carsRequested,
    carsLoaded,
    carsError
};