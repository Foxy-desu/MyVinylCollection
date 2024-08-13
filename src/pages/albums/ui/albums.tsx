import { useEffect, useState } from "react";
import { IAlbum } from "../../../app/store/albumsSlice";
import SearchAndSortContainer from '../../../features/search_and_sort/model/searchAndSortContainer.tsx';
import AddAlbumContainer from '../../../features/add_album/model/addAlbumContainer.tsx';
import cl from './albums.module.scss';

const Albums =({albums, filterAlbumsWithQuery}:{albums: IAlbum[], filterAlbumsWithQuery:any})=> {
  return (
    <>
      <SearchAndSortContainer filterAlbumsWithQuery={filterAlbumsWithQuery}/>
      <section>
        <h2 className='vidually-hidden'>Albums collection</h2>
        <AlbumsCollection albums={albums}/>
      </section>
    </>
  )
};

const AlbumsCollection =({albums}: {albums: Array<IAlbum>})=> {
  function renderElements(albums: IAlbum[]){
    return albums.map((album)=> {
      return <>
        <AlbumPreview key={album.id} album={album}/>
      </>
    })
  }
  return (
    <ul className={cl.list}>
      <li className={`${cl.listItem}`}>
        <AddAlbumContainer />
      </li>
      {renderElements(albums)}
    </ul>
  )
}

const AlbumPreview =({album}:{album: IAlbum})=> {
  const [isHovered, setIsHovered] = useState(false);
  function setHover() {
    setIsHovered(true)
  };
  function unsetHover() {
    setIsHovered(false)
  };

  useEffect(() => {
    return () => {
      setIsHovered(false);
    };
  }, [])

  return (
    <li className={cl.listItem} onMouseEnter={setHover} onMouseLeave={unsetHover}>
        {isHovered
          ? <HoveredPreview data={album}/>
          : <NonHoveredPreview data={album}/>
        }
    </li>
  )
}

const NonHoveredPreview =({data}: {data: IAlbum})=> {
  return (
    <div className={`${cl.labelsWrap}`} style={{width: '100%', height: '100%'}}>
        <h3 className={cl.coverLabel}>{data.album}</h3>
        <p className={`${cl.coverLabel} ${cl.short}`}>{data.artist}</p>
      <div className={`${cl.coverElement}`}>
      </div>
    </div>
  )
}

const HoveredPreview =({data}: {data: IAlbum})=> {
  return (
    <div className={`${cl.labelsWrap} ${cl.hovered}`} style={{width: '100%', height: '100%'}}>
      <div className={`${cl.coverElement} ${cl.transformed}`}>
      </div>
      <div className={`${cl.recordElement}`}>
      </div>
        <h3 className={cl.coverLabel}>{data.album}</h3>
        <p className={`${cl.coverLabel} ${cl.short}`}>{data.artist}</p>
    </div>
  )
}

export default Albums;