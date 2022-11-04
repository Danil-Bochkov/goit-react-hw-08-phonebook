export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.name;

export const selectEmail = state => state.auth.user.email;

export const selectToken = state => state.auth.token;

export const isRefreshing = state => state.auth.isRefreshing;

export const isSigningUp = state => state.auth.isSigningUp;

export const isLoggingIn = state => state.auth.isLoggingIn;

export const isLoggingOut = state => state.auth.isLoggingOut;
