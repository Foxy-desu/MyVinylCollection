import cl from './searchAndSort.module.scss';
import SearchBarContainer from '../../../features/search_bar/model/searchBarContainer';
import SortBarContainer from '../../../features/sort_bar/model/sortBarContainer';

//TODO: replace any type for props with proper one
const SearchAndSort =({passQuery, passSortMethod}:{passSortMethod:any, passQuery: any})=> {
  return (
    <form className={cl.bar} style={{display: 'flex', gap: '15px'}}>
      <SearchBarContainer filterAlbumsWithQuery={passQuery}/>
      <SortBarContainer getSortMethod={passSortMethod}/>
    </form>
  )
};

export default SearchAndSort;