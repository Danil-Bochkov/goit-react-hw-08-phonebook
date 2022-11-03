export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.name;

export const selectEmail = state => state.auth.user.email;

export const selectToken = state => state.auth.token;
