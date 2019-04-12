const initialState = {
    cars: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    console.log(action.type);

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
        case 'UPDATE_CAR':
            console.log('update_car', action.payload);
            return {
                ...state
            }
        case 'DELETE_CAR':
            console.log('delete_car', action.payload);
            return {
                ...state
            }
        default:
            return state;
    }
};

export default reducer;