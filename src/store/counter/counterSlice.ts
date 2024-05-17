import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 5,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, /* action */) => {
            state.count += 1;
        },
    }
});

// Action creators are generated for each case reducer function
export const { 
  increment,
} = counterSlice.actions;

export default counterSlice.reducer;
