export const selectContacts = state => state.contacts.items;

export const selectContactNumber = state => state.contacts.items.number;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterContact = state => state.filters;