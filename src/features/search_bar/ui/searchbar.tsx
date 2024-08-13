import searchIco from '../../../app/assets/svg/magnifying.svg';
import cl from './searchBar.module.scss';

interface ISearchBarProps {
  query: string;
  changeInput: (value: string) => void;
  resetInput: () => void;
  search: () => void;
  inputId?: string;
};
type TSearchHandlerParam = React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLInputElement> | undefined;
type TChangeInputHandlerParam = React.ChangeEvent<HTMLInputElement>;

const SearchBar =({query, changeInput, search, resetInput, inputId='searchInput'}:ISearchBarProps)=> {
  // const isDisabled = useMemo(()=> !query, [query]);
  function handleSearch(e?:TSearchHandlerParam){
    e?.preventDefault();
    search();
  };
  function handleChange(e:TChangeInputHandlerParam){
    changeInput(e.target.value);
  };
  function handleReset(){
    resetInput();
  };
  function handleKeyDown(e:React.KeyboardEvent<HTMLInputElement>){
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSearch();
      e.preventDefault();
      return false;
    }
  };
  
  return (
    <div className={cl.searchBar} style={{display: 'flex'}}>
      <input
        className={cl.searchInput}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        id={inputId}
        type='text'
        placeholder='Search albums...'
        aria-label="Search for albums"
      />
      <button 
        className={cl.resetBtn}
        onClick={handleReset}
        type='button'
      >
        <div className={cl.resetBtn_ico}>
          <span className={cl.resetBtn_ico_line}/>
          <span className={cl.resetBtn_ico_line}/>
        </div>
      </button>
      <button 
        className={cl.searchBtn}
        onClick={handleSearch}
        type='button'
      >
        <img
          className={cl.searchBtn_ico}
          src={searchIco}
          alt=""
        />
        <span className='visually-hidden'>Search</span>
      </button>
    </div>
  )
};

export default SearchBar;