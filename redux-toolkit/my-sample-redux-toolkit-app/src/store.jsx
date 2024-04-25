import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/CounterSlice';
import numberReducer from './features/number/NumberSlice';
import { logger } from 'redux-logger';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        number: numberReducer,
    },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;