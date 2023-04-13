import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../slice/Login';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});
