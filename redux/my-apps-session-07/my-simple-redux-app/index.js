//import lib
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

//initial state
const initialCounterState = {
    counter: 0
}

const initialNumberState = {
    number: 0
}




//action
function incrementCounter() {
    return {
        type: 'INCREMENT_COUNTER'
    }
}


function decrementCounter() {
    return {
        type: 'DECREMENT_COUNTER'
    }
}

function incrementNumber() {
    return {
        type: 'INCREMENT_NUMBER'
    };
}

function decrementNumber() {
    return {
        type: 'DECREMENT_NUMBER'
    };
}


function incrementNumberByAmount(amount=1) {
    return {
        type: 'INCREMENT_NUMBER_BY_AMOUNT',
        payload: amount
    };
}


function incrementCounterByAmount(amount) {
    return {
        type: 'INCREMENT_COUNTER_BY_AMOUNT',
        payload: amount
    }
}




//reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
            }   
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter - 1,
            }   
        case 'INCREMENT_COUNTER_BY_AMOUNT':
            return {
                ...state,
                counter: state.counter + action.payload,
            }   
        default:
            return state;
    }
}

const numberReducer = (state=initialNumberState, action) => {
    switch (action.type) {
        case 'INCREMENT_NUMBER':
            return {
                ...state,
                number : state.number + 1,
            };
        case 'DECREMENT_NUMBER':
            return {
                ...state,
                number : state.number - 1,
            };
        case 'INCREMENT_NUMBER_BY_AMOUNT':
            return {
                ...state,
                number : state.number + action.payload,
            };
        default:
            return state;
    }
}

//store
const combinedReducers = combineReducers({
    counterQty: counterReducer,
    numberQty: numberReducer
});
const store = createStore(combinedReducers, applyMiddleware(logger));

console.log(store.getState());

//update the store
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounterByAmount(5));
store.dispatch(incrementCounterByAmount(3));
store.dispatch(incrementNumber());
store.dispatch(incrementNumberByAmount(7));
store.dispatch(decrementNumber());