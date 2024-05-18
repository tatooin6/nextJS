import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    addOne: (state) => {
      state.count++;
    },
    substractOne: (state) => {
      if (state.count === 0)
        return;

      state.count--;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) {
        state.count = 0;
        return;
      }

      state.count = 0;
    },
  }
});

// Action creators are generated for each case reducer function
export const { 
  addOne,
  substractOne,
  resetCount,
} = counterSlice.actions;

export default counterSlice.reducer;
