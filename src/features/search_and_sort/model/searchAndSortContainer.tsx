import SearchAndSort from "../ui/searchAndSort"

const SearchAndSortContainer =({filterAlbumsWithQuery}:{filterAlbumsWithQuery:any})=> {
  return (
    <>
      <SearchAndSort filterAlbumsWithQuery={filterAlbumsWithQuery}/>
    </>
  )
};

export default SearchAndSortContainer;