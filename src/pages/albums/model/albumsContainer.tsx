import { useMemo, useState } from "react";
import { useAppSelector } from "../../../shared/utils/hooks/hooks"
import Albums from "../ui/albums"
import { IAlbum } from "../../../app/store/albumsSlice";

const AlbumContainer =()=> {
  const albums = useAppSelector(store => store.albums.albumsCollection);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortMethod, setSortMethod] = useState('artist');
  const sortedAlbums = useMemo(()=> {
    const copy = structuredClone(albums);
    return sortAlbums(copy, sortMethod);
  }, [albums, sortMethod]);
  const filteredAlbums = useMemo(()=> {
    return filterAlbumsWithQuery(filterQuery, sortedAlbums);
  }, [sortedAlbums, filterQuery]);

  function filterAlbumsWithQuery(query: string, albums: IAlbum[]){
    if(query) {
      const filtered = albums.filter((album) => {
        let result;
        type albumKey = keyof IAlbum;
        for (let key in album) {
          const transformed = album[key as albumKey].toString().toLowerCase();
          result = transformed.includes(query);
          if (result) break;
        }
        return result
      });
      return filtered;
    } else {
      return albums;
    }
  };
  function sortAlbums(albums: IAlbum[], sortMethod: string) {
    switch (sortMethod) {
      case 'album': {
        return albums.sort((a, b) => a.album.localeCompare(b.album));
      }
      case 'artist': {
        return albums.sort((a, b) => a.artist.localeCompare(b.artist));
      }
      case 'releaseDate': {
        return albums.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      }
      case 'creationDate': {
        return albums.sort((a, b) => new Date(a.id).getTime() - new Date(b.id).getTime());
      }
      case 'none': {
        return albums;
      }
      default: {
        return albums
      }
    }
  };
  function setFilter(filterQuery:string){
    setFilterQuery(filterQuery.trim().toLowerCase())
  };
  function setSort(sortMethod: string) {
    setSortMethod(sortMethod);
  };

  return (
    <>
      <Albums albums={filteredAlbums} filterAlbums={setFilter} sortAlbums={setSort}/>
    </>
  )
};

export default AlbumContainer;