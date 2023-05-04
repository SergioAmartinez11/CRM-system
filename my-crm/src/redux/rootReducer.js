import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import productReducer from './productsSlice';
import commonReducer from './common';
import authReducer from './authSlice';

export const rootReducer = configureStore({
    reducer:{
        employee: employeeReducer,
        product: productReducer,
        common: commonReducer,
        auth: authReducer
    }
});


