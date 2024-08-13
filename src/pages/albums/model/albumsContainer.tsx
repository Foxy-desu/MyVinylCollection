import { useMemo, useState } from "react";
import { useAppSelector } from "../../../shared/utils/hooks/hooks"
import Albums from "../ui/albums"
import { IAlbum } from "../../../app/store/albumsSlice";

const AlbumContainer =()=> {
  const albums = useAppSelector(store => store.albums.albumsCollection);
  const [filterQuery, setFilterQuery] = useState('');
  const filteredAlbums = useMemo(()=> {
    return filterAlbumsWithQuery(filterQuery, albums);
  }, [albums, filterQuery])

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

  function setFilter(filterQuery:string){
    setFilterQuery(filterQuery.trim().toLowerCase())
  }

  return (
    <>
      <Albums albums={filteredAlbums} filterAlbumsWithQuery={setFilter}/>
    </>
  )
};

export default AlbumContainer;