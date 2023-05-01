import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import productReducer from './productsSlice';
import commonReducer from './common';

export const store = configureStore({
    reducer:{
        employee: employeeReducer,
        product: productReducer,
        common: commonReducer
    }
});


