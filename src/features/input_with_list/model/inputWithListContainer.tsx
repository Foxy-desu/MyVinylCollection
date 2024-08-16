import { useEffect, useState } from "react";
import InputWithList, { IInputWithListProps } from "../ui/inputWithList"
import { uid } from "../../../shared/utils/helpers/UIdCreator";

interface IInputWithListContainerProps {
  inputId: string;
  inputTitle: string;
  inputPlaceholder: string;
  inputLabelVisible: boolean;
  inputBtnSrText: string;
  inputIsRequired: boolean;
  listContentType: 'tags'|'listElements';
  passListElements: ([]:TStateType) => void;
};

type TStateType = Array<{title:string, id:string}>|never[];


const InputWithListContainer =({...props}: IInputWithListContainerProps)=> {

  const [inputValue, setInputValue]=useState('');
  const [listItems, setListItems]=useState<TStateType>([]);
  
  function changeInput(value:string) {
    setInputValue(value);
  };
  function resetInput(){
    setInputValue('');
  };
  function addTag({title, id}:{title:string, id:string}){
    setListItems([...listItems, {title, id}]);
  };
  function removeTag(listItems:IInputWithListProps['tags'],tagIdToRemove:string){
    setListItems(listItems.filter((tag)=> {
      return tag.id!== tagIdToRemove;
    }))
  };
  function handleTagAdding(){
    const newTag = {title: inputValue, id: uid()};
    addTag(newTag);
    resetInput();
  };
  function handleTagRemoval(id:string){
    removeTag(listItems, id);
  };

  useEffect(()=> {
    props.passListElements(listItems);
  }, [listItems]);

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
        tags={listItems}
      />
    </>
  )
};

export default InputWithListContainer;