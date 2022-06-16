import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'a',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

export default slice.reducer;
export const { increment } = slice.actions;
