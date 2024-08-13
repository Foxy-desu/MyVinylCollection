import cl from './searchAndSort.module.scss';
import SearchBarContainer from '../../search_bar/model/searchBarContainer';

//TODO: replace any type for props with proper one
const SearchAndSort =({filterAlbumsWithQuery}:{filterAlbumsWithQuery:any})=> {
  return (
    <form className={cl.bar} style={{display: 'flex', gap: '15px'}}>
      <SearchBarContainer filterAlbumsWithQuery={filterAlbumsWithQuery}/>
      <div className='sortBar' style={{display: 'flex'}}>
        <label htmlFor="sortSelect" style={{display: 'inline-block',border: 'none', padding: '0.5rem 0.8rem', borderRight: 'none', borderRadius: '25px 0 0 25px', backgroundColor: 'rgb(18, 18, 18)'}}>Sort by:</label>
        <select className='sort' id="sortSelect" style={{appearance: 'none', border: 'none', borderRight: 'none', background: ' rgb(18, 18, 18)', padding: '2px 2px', textAlign: 'center', color: '#8e7eb1',borderRadius: '0 25px 25px 0'}}>
          <option className='sortOption' value='' disabled>sort method</option>
          <option className='sortOption' value='album' >album</option>
          <option className='sortOption' value='artist' >artist</option>
          <option className='sortOption' value='releaseDate' >release date</option>
          <option className='sortOption' value='creationDate' >creation date</option>
        </select>
      </div>
    </form>
  )
};

export default SearchAndSort;