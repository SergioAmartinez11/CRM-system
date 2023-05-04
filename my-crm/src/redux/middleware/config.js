import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import employeeReducer from '../employeeSlice';
import productReducer from '../productsSlice';
import commonReducer from '../common';
import authReducer from '../authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    employee: employeeReducer,
    product: productReducer,
    common: commonReducer,
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
