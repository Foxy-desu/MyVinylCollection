import FormInput from '../../../shared/components/form_input/formInput';
import InputButton from '../../../shared/components/input_button/inputButton';
import Tag from '../../../shared/components/tag/tagComponent';
import CrossElement from '../../../shared/decorations/cross_element/crossElement';
import {IInputWithListProps, IListBtn, IListElementProps, IPlainListProps, ITagListProps} from '../../../shared//utils/types';
import cl from './inputWithList.module.scss';

//TODO: clean component
const inputWithList =({...props}:IInputWithListProps)=> {
  return (
    <div className={cl.inputBlock}>
      <div className={cl.inputWrap}>
        <FormInput
            id={props.inputId}
            value={props.inputValue}
            labelTitle={props.inputTitle}
            labelVisible={props.inputLabelVisible}
            isRequired={props.inputIsRequired}
            changeValue={props.changeInput}
            enterCallback={props.enterBtnCallback}
            placeholder={props.inputPlaceholder}
            title={props.title}
            type='text'
            validationErrorObject={props.validationErrorObject}
            validationLock={props.validationLock}
        />
        <InputButton srText={props.inputBtnSrText} onClick={props.inputBtnClick} disabled={props.validationLock} title={props.validationLock ? 'Make sure fill the field properly':''}/>
      </div>
      {props.listContentType === 'tags' && <TagsList tags={props.listItems} clickTag={props.tagBtnClick}/>}
      {props.listContentType === 'listElements' && <PlainList elements={props.listItems} clickElementBtn={props.tagBtnClick}/>}
    </div>
  )
};

const TagsList =({tags, clickTag}:ITagListProps)=> {
  return (
    <div className={cl.tagsListWrap}>
        <ul className={cl.tagsList}>
          {tags.map((tag, index)=>
            <Tag key={index} tag={tag} clickTag={clickTag}/>
          )}
        </ul>
      </div>
  )
};
const PlainList =({elements, clickElementBtn}:IPlainListProps)=> {
  return (
    <div className={cl.tagsListWrap}>
        <ul className={`${cl.tagsList} ${cl.listType}`}>
          {elements.map((element, index)=>
            <ListElement key={index} orderIndex={index+1} listElement={element} clickElementBtn={clickElementBtn}/>
          )}
        </ul>
      </div>
  )
};
const ListElement = ({listElement, clickElementBtn, orderIndex}:IListElementProps)=> {
  
  function handleElementRemoval(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    clickElementBtn(listElement.id)
  }

  return (
    <li className={cl.listElement}>
      <span>{orderIndex}</span>
      <span className={cl.elementTitle}>{listElement.title}</span>
      <ListBtn clickTagHandler={handleElementRemoval}/>
    </li>
  )
};
const ListBtn = ({clickTagHandler, ...rest}:IListBtn)=>{
  return (
    <button className={cl.tagBtn} onClick={clickTagHandler} {...rest}>
      <CrossElement rotateDegree={45}/>
    </button>
  )
};

export default inputWithList;