import { createSlice } from '@reduxjs/toolkit';

import { registerUser } from '../feauture/authActions'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for moni
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{

    },
    extraReducers: {
    [registerUser.pending]: (state) => {
        state.loading = true
        state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        },
    },
})

export default authSlice.reducer