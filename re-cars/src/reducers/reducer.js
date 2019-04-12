const initialState = {
    cars: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default reducer;