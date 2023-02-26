import {configureStore } from '@reduxjs/toolkit'
import authreducer from '../feauture/authSlice';

 const store = configureStore({
    reducer: {
        auth: authreducer
    }
})
export default store;