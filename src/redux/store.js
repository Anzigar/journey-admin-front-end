import { configureStore } from '@reduxjs/toolkit';
import allreducers from './reducers'

const store = configureStore({
    reducer: allreducers,
});
export default store;
