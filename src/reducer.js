const initialState = 15;

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;

        case "DEC":
            return state - 1;

        case "RND":
            return state + action.random;

        default: return state;
    }
}

export default reducer;
