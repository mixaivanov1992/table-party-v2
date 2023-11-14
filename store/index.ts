import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from '@store/reducers/UserSlice';

const rootReducer = combineReducers({
    userSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        ]),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];