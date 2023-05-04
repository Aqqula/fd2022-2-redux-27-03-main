import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    step: 1, 
  },
  reducers: {
    addCount(state, action) {
      state.count += action.payload;
    },
    subCount(state, action) {
      state.count -= action.payload;
    },
    setStep(state, action) {
      state.step = action.payload;
    }
  },
});

export const {actions} = countSlice;
export default countSlice.reducer;
