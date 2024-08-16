import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import albumsReducer from './albumsSlice.ts';

const RootReducer = combineReducers({
  albums: albumsReducer,
})

const getAlbumsFromLocalStorage = () => {
  if (
    localStorage.getItem("albums") !== null &&
    localStorage.getItem("albums") !== "undefined"
  ) return JSON.parse(localStorage.getItem("albums")||'{}');
};

const albumsMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("albums", JSON.stringify(getState()));
    return result;
  };
};

export const store = configureStore({
  reducer: RootReducer,
  preloadedState: getAlbumsFromLocalStorage(),
  middleware: (getDefaultMiddleware)=> {
    return getDefaultMiddleware().concat(albumsMiddleware)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;