const reducer = (state = 0, action) => { // (2)
    switch(action.type) { 
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.payload;
        default: // (1)
            return state;
    }
};

export default reducer;