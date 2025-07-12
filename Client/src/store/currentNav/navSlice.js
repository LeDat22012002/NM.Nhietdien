import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    currentNav: localStorage.getItem('currentNav') || 'Home',
  },
  reducers: {
    setCurrentNav: (state, action) => {
      state.currentNav = action.payload;
    },
  },
});

export const { setCurrentNav } = navSlice.actions;

export default navSlice.reducer;
