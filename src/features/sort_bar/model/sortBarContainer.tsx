import { useEffect, useState } from "react";
import SortBar from "../ui/sortBar"

interface ISortBarContainerProps {
  getSortMethod: (sortMethod: string) => void;
}

const SortBarContainer =({getSortMethod}: ISortBarContainerProps)=> {
  const sortOptions = [
    {value: 'album', label: 'album'},
    {value: 'artist', label: 'artist'},
    {value: 'releaseDate', label: 'release date'},
    {value: 'creationDate', label: 'creation date'},

  ]
  const [sort, setSort] = useState('creationDate');

  useEffect(()=> {
    getSortMethod(sort);
  }, [sort])
 
  function setSelectedSort(value: string) {
    setSort(value);
  };

  return (
    <>
      <SortBar selectOption={setSelectedSort} selectedValue={sort} options={sortOptions}/>
    </>
  )
};

export default SortBarContainer;