import { createSlice } from '@reduxjs/toolkit';
import { increment as counterIncrement } from './counterSlice';


const initialState = {
    numberValue:0,
}

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.numberValue++;
        },

        decrement: (state, action) => {
            state.numberValue--;
        },
        incrementByValue: (state, action) => {
            state.numberValue += parseInt(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(counterIncrement, (state) => {
            state.numberValue++;
        })
    }
});

export default numberSlice.reducer;
export const { increment, decrement, incrementByValue } = numberSlice.actions;
