import { useState } from "react";
import { IInputWithListProps, TInputWithListContainerListState } from "../../../shared/utils/types";

export const useInputBlockData =()=> {
  const [inputValue, setInputValue]=useState('');
  const [listItems, setListItems]=useState<TInputWithListContainerListState>([]);
  
  function changeInput(value:string) {
    setInputValue(value);
  };
  function resetInput(){
    setInputValue('');
  };
  function addTags(tagsObjectsArray: {title:string,id:string}[]){
    setListItems([...listItems, ...tagsObjectsArray]);
  };
  function removeTag(listItems:IInputWithListProps['listItems'],tagIdToRemove:string){
    setListItems(listItems.filter((tag)=> {
      return tag.id!== tagIdToRemove;
    }))
  };

  return {
    inputValue,
    changeInput,
    listItems,
    addTags,
    removeTag,
    resetInput
  }
}