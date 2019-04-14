const initialState = {
    cars: [],
    loading: true,
    error: null,
    selectedCar: null
};

const reducer = (state = initialState, action) => {
    const newCars = [...state.cars];
    //console.log(action.type);

    switch (action.type) {
        case 'FETCH_CARS_REQUEST':
            return {
                cars: [],
                loading: true,
                error: null
            };
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
        case 'SET_SELECTED_CAR':
            return {
                ...state,
                selectedCar: action.payload
            };
        case 'CREATE_CAR':
            newCars.push(action.payload);

            return {
                ...state,
                cars: newCars
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