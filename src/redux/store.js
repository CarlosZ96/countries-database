import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countrieSlice';


const rootReducer = {
  countries: countriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
