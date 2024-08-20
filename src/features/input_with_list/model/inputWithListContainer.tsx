import { useEffect } from "react";
import InputWithList from "../ui/inputWithList"
import { uid } from "../../../shared/utils/helpers/UIdCreator";
import { formatData } from "../../../shared/utils/helpers/formatting";
import { parseStringToArray } from "../../../shared/utils/helpers/parsers";
import { useInputBlockData } from "./useInputBlockData";
import {IInputWithListContainerProps, } from '../../../shared/utils/types';
import { useValidate } from "./useValidate";

const InputWithListContainer =({...props}: IInputWithListContainerProps)=> {
  const {inputValue,changeInput,listItems,addTags,removeTag,resetInput} = useInputBlockData();
  const {validationError, isLocked} = useValidate(inputValue, props.inputIsRequired);
  function stringsToTagObjectsArray (stringsArray: string[]){
    return stringsArray.map((string)=> {
      return {title: formatData(string), id: uid()};
    })
  };
  function handleTagAdding(){
    const parsedValueString = parseStringToArray(inputValue, ';');
    const tagObjectsArray = stringsToTagObjectsArray(parsedValueString);
    addTags(tagObjectsArray);
    resetInput();
  };
  function handleTagRemoval(id:string){
    removeTag(listItems, id);
  };
  useEffect(()=> {
    props.passListElements(listItems);
  }, [listItems]);

  useEffect(()=> {
    console.log(`error? - ${validationError}\nisLocked? - ${isLocked}`)
  },[validationError, isLocked]);

  return (
    <>
      <InputWithList
        listContentType={props.listContentType}
        inputId={props.inputId}
        inputValue={inputValue}
        inputTitle={props.inputTitle}
        inputPlaceholder={props.inputPlaceholder}
        inputLabelVisible={props.inputLabelVisible}
        changeInput={changeInput}
        inputBtnClick={handleTagAdding}
        enterBtnCallback={handleTagAdding}
        inputBtnSrText={props.inputBtnSrText}
        inputIsRequired={props.inputIsRequired}
        tagBtnClick={handleTagRemoval}
        listItems={listItems}
        title={props.inputPrompt}
      />
    </>
  )
};

export default InputWithListContainer;