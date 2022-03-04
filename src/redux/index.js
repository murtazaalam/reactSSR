import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import storage from "redux-persist/lib/storage";

import AuthReducer from './slices/auth.slices';
import CartReducer from './slices/cart.slice';
import CourseReducer from './slices/course.slice';
// import AdminsReducer from './slice/admins.slice'
const persistConfig = {
    key: 'root',
    storage: storage,

};

const rootReducer = combineReducers({
    AuthReducer:AuthReducer, 
    CartReducer:CartReducer,
    CourseReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
