import { useState } from "react";
import SearchBar from "../ui/searchbar";

const SearchBarContainer =({filterAlbumsWithQuery}:{filterAlbumsWithQuery: any})=> {
  const [query, setQuery] = useState('');
  function changeQueryString(value: string) {
    setQuery(value);
  };
  function resetQueryString() {
    setQuery('');
  };
  function search() {
    filterAlbumsWithQuery(query);
  };
  function resetAndSearch(){
    resetQueryString();
    filterAlbumsWithQuery('');
  }

  return (
    <>
      <SearchBar query={query} changeInput={changeQueryString} search={search} reset={resetAndSearch}/>
    </>
  )
};

export default SearchBarContainer;