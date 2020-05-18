const initialCounterState = {
    counterValue: 0
}

export const counterReducer = (state = initialCounterState, action = {}) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {counterValue : state.counterValue + 1});
        case 'DECREMENT':
            return Object.assign({}, state, {counterValue : state.counterValue -1 });
        default:
            return initialCounterState
    }
}