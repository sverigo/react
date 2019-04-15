import CarsService from '../services/cars-service';

const carsService = new CarsService();

export const pageIsLoading = () => {
    return {
        type: 'PAGE_IS_LOADING'
    };
};

export const fetchError = (error) => {
    return {
        type: 'FETCH_ERROR',
        payload: error
    };
};

export const fetchCars = () => {
    return async (dispatch) => {
        carsService.getCarsList()
            .then((data) => dispatch(fetchCarsSuccess(data)))
            .catch((error) => dispatch(fetchCarsFailure(error)));
    };
};

export const fetchCarsSuccess = (newCars) => {
    return {
        type: 'FETCH_CARS_SUCCESS',
        payload: newCars
    };
};

export const fetchCarsFailure = (error) => {
    return {
        type: 'FETCH_CARS_FAILURE',
        payload: error
    };
};

export const setCurrentCar = (carId) => {
    return async (dispatch) => {
        const request = carsService.getCarById(carId);
        return request.then((car) => {
            dispatch({ type: 'SET_CURRENT_CAR', payload: car });
        });
    };
};

export const createCar = (car) => {
    return async (dispatch) => {
        const request = carsService.create(car);

        return request.then(() => {
            dispatch({ type: 'CREATE_CAR', payload: car })
        });
    };
};

export const updateCar = (car) => {
    return async (dispatch) => {
        const request = carsService.update(car);

        return request.then(() => {
            dispatch({ type: 'UPDATE_CAR', payload: car })
        });
    };
};

export const deleteCar = (carId) => {
    return async (dispatch) => {
        const request = carsService.delete(carId);

        return request.then(() => {
            dispatch({ type: 'DELETE_CAR', payload: carId });
        });
    };
};