import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  isSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: state => {
            state.isSigningUp = true;
        },
        [register.fulfilled](state, action) {
            state.isSigningUp = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected]: state => {
            state.isSigningUp = false;
        },
        [logIn.pending]: state => {
            state.isLoggingIn = true;
        },
        [logIn.fulfilled](state, action) {
             state.isLoggingIn = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.rejected]: state => {
            state.isLoggingIn = false;
        },
        [logOut.pending]: state => {
            state.isLoggingOut = true;
        },
        [logOut.fulfilled](state) {
            state.isLoggingOut = false;
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [logOut.rejected]: state => {
            state.isLoggingOut = false;
        },
        [fetchCurrentUser.pending]: state => {
            state.isRefreshing = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.isRefreshing = false;
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [fetchCurrentUser.rejected]: state => {
            state.isRefreshing = false;
        },
    }
});

export const authReducer = authSlice.reducer;