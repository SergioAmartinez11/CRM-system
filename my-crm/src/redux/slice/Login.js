import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    validCredentials: false,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    valid: (state) => {
      state.isLoading = false;
      state.validCredentials = true;
    },
    reset: (state) => {
      state.isLoading = false;
      state.validCredentials = false;
    },
  },
});
