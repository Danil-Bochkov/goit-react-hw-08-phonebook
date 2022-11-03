import { authReducer } from "./auth/auth-slice";
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from "./contacts/filterSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
})

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer,
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
    }
});

export const persistor = persistStore(store);
