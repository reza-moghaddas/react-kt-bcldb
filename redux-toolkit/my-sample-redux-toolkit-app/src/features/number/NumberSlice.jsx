import { createSlice } from '@reduxjs/toolkit';
import { increment as incrementCounter } from '../counter/CounterSlice';

const initialState = {
    numberValue:0,
}


const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        increment: (state) => {
            state.numberValue++;
        },
        decrement: (state) => {
            state.numberValue--;
        },
        incrementByValue: (state, action) => {
            state.numberValue += parseInt(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementCounter, (state, action) => {
            state.numberValue++;
        })
        
    }
});

export default numberSlice.reducer;
export const { increment, decrement, incrementByValue } = numberSlice.actions;

