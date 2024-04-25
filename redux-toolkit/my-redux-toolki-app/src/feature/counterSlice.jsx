import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    counterValue:0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counterValue++;
        },

        decrement: (state, action) => {
            state.counterValue--;
        },
        incrementByValue: (state, action) => {
            state.counterValue += parseInt(action.payload);
        }
    }
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByValue } = counterSlice.actions;
