import { createStore, type Action } from 'redux';

type CounterState = {
    value: number;
}

const initialState = { value: 0};


function counterReducer(state: CounterState = initialState, action: Action) {
    switch(action.type) {
        case 'Counter/increment':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'Counter/decrement':
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;