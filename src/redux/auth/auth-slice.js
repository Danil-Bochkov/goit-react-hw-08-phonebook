import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, verifyUser, fetchCurrentUser } from "./auth-operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: '', email: '', subscription: '', avatarUrl: '' },
        token: null,
        isLoading: false,
        isLoggedIn: false,
        error: null,
        isFetching: false,
    },
    extraReducers: {
        [register.pending]: state => {
        state.isLoading = true;
        state.error = false;
        },
        [register.fulfilled]: (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        },
        [register.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        },
        [verifyUser.pending]: state => {
        state.isLoading = true;
        state.error = false;
        },
        [verifyUser.fulfilled]: state => {
        state.isLoading = false;
        },
        [verifyUser.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        },
        [logIn.pending]: state => {
        state.isLoading = true;
        state.error = false;
        },
        [logIn.fulfilled]: (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        },
        [logIn.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        },
        [logOut.pending]: state => {
        state.isLoading = true;
        state.error = false;
        },
        [logOut.fulfilled]: (state) => {
        state.token = null;
        state.user = { name: '', email: '', subscription: '', avatarUrl: '' };
        state.isLoggedIn = false;
        state.isLoading = false;
        },
        [logOut.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        },
        [fetchCurrentUser.pending]: state => {
        state.isLoading = true;
        state.isFetching = true;
        state.error = false;
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isFetching = false;
        },
        [fetchCurrentUser.rejected]: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isFetching = false;
        },
    }
});

export const authReducer = authSlice.reducer;