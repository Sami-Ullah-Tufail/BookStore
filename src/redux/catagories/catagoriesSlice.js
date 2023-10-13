import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagories: [],
};

const catSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    checkStatus: (state) => (state.catagories.length === 0 ? 'under Construction' : state.catagories.status),
  },
});

export default catSlice.reducer;
export const { checkStatus } = catSlice.actions;
