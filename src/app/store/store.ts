import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumsReducer from './albumsSlice.ts';

const RootReducer = combineReducers({
  albums: albumsReducer,
})

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;