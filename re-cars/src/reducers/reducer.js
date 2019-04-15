const initialState = {
    cars: [],
    loading: true,
    error: null,
    currentCar: null
};

const reducer = (state = initialState, action) => {
    const newCars = [...state.cars];

    switch (action.type) {
        case 'PAGE_IS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'PAGE_IS_LOADED':
            return {
                ...state,
                loading: false
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'FETCH_CARS_SUCCESS':
            return {
                cars: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_CARS_FAILURE':
            return {
                cars: [],
                loading: false,
                error: action.payload
            };
        case 'SET_CURRENT_CAR':
            return {
                ...state,
                currentCar: action.payload,
                loading: false,
            };
        case 'CREATE_CAR':
            newCars.push(action.payload);
            return {
                ...state,
                cars: newCars,
            };
        case 'UPDATE_CAR':
            return {
                ...state
            };
        case 'DELETE_CAR':
            const index = state.cars.findIndex((car) => car.id === action.payload);
            newCars.splice(index, 1);
            return {
                ...state,
                cars: newCars
            };
        default:
            return state;
    }
};

export default reducer;