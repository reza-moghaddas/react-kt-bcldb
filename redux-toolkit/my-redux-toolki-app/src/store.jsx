import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './feature/counterSlice';
import NumberSlice from './feature/numberSlice';
import userSlice from './feature/userSlice';
import logger from 'redux-logger';


const store = configureStore({
    reducer: { counter: CounterSlice, number: NumberSlice, user: userSlice},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
});

export default store;