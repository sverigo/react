import CarsService from '../services/cars-service';

const carsService = new CarsService();

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

const createCar = (car) => {
    return async (dispatch) => {
        const request = carsService.create(car);
        
        return request.then(() => {
            dispatch({ type: 'CREATE_CAR', payload: car })
        });
    }
}

const updateCar = (car) => {
    return async (dispatch) => {
        const request = carsService.update(car);

        return request.then(() => {
            dispatch({ type: 'UPDATE_CAR', payload: car })
        });
    }
};

const deleteCar = (carId) => {
    return async (dispatch) => {
        const request = carsService.delete(carId);

        return request.then(() => {
            dispatch({ type: 'DELETE_CAR', payload: carId });
        });
    };
}

const setSelectedCar = (carId) => {
    return async (dispatch) => {
        const request = carsService.getCarById(carId);

        return request.then((car) => {
            dispatch({ type: 'SET_SELECTED_CAR', payload: car })
        });
    }
}

export {
    carsRequested,
    carsLoaded,
    carsError,
    setSelectedCar,
    createCar,
    updateCar,
    deleteCar
};