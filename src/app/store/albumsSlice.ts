import {createSlice} from  '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store.ts';

export interface IAlbum {
  id: number,
  album: string,
  artist: string,
  date: string,
  compositions: string,
}
export interface IAlbumState {
  albumsCollection: [] | IAlbum[]
}


const initialState: IAlbumState = {
  albumsCollection: [],
};
export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    addAlbum: (state, action: PayloadAction<IAlbum>) => {
      state.albumsCollection = [...state.albumsCollection, action.payload];
    },
    removeAlbum: (state, action: PayloadAction<number>) => {
      state.albumsCollection = state.albumsCollection.filter(album=> album.id !== action.payload)
    },
    editAlbum: (state, action: PayloadAction<IAlbum>)=> {
      const albumIndex = state.albumsCollection.findIndex(album=> album.id === action.payload.id)
      state.albumsCollection[albumIndex] = action.payload;
    }
  },
});

export const { addAlbum, removeAlbum, editAlbum } = albumSlice.actions;
export const selectAlbums = (state: RootState) => state.albums.albumsCollection
export default albumSlice.reducer;