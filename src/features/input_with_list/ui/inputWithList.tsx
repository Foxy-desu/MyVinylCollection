import FormInput from '../../../shared/components/form_input/formInput';
import InputButton from '../../../shared/components/input_button/inputButton';
import Tag from '../../../shared/components/tag/tagComponent';
import CrossElement from '../../../shared/decorations/cross_element/crossElement';
import cl from './inputWithList.module.scss';

//TODO: clean component
export interface IInputWithListProps {
  listContentType: 'tags'|'listElements';
  inputId: string;
  inputValue: string;
  inputTitle: string;
  inputLabelVisible: boolean;
  inputIsRequired: boolean;
  changeInput: (value: string) => void;
  inputPlaceholder: string;
  inputBtnSrText: string;
  inputBtnClick: ()=> void;
  enterBtnCallback: ()=>void;
  tags: Array<{title:string, id:string}>;
  tagBtnClick: (id:string)=> void
}
interface IElemBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clickTagHandler: (e: React.MouseEvent<HTMLButtonElement>)=>void;
}
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
          type='text'
      />
      <InputButton srText={props.inputBtnSrText} onClick={props.inputBtnClick}>
        <CrossElement rotateDegree={0}/>
      </InputButton>
      </div>
      {props.listContentType === 'tags' && <TagsList tags={props.tags} clickTag={props.tagBtnClick}/>}
      {props.listContentType === 'listElements' && <ElementsList elements={props.tags} clickElementBtn={props.tagBtnClick}/>}
    </div>
  )
};

const TagsList =({tags, clickTag}:{tags:IInputWithListProps['tags'], clickTag:IInputWithListProps['tagBtnClick'] })=> {
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

const ElementsList =({elements, clickElementBtn}:{elements:IInputWithListProps['tags'], clickElementBtn:IInputWithListProps['tagBtnClick'] })=> {
  return (
    <div className={cl.tagsListWrap}>
        <ul className={cl.tagsList}>
          {elements.map((element, index)=>
            <Element key={index} listElement={element} clickElementBtn={clickElementBtn}/>
          )}
        </ul>
      </div>
  )
}

const Element = ({listElement, clickElementBtn}:{listElement: {title:string, id:string}, clickElementBtn: (id:string)=>void})=> {
  
  function handleTagRemoval(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    clickElementBtn(listElement.id)
  }

  return (
    <li className={cl.element}>
      <span className={cl.tagTitle}>{listElement.title}</span>
      <ElementBtn clickTagHandler={handleTagRemoval}/>
    </li>
  )
};

const ElementBtn = ({clickTagHandler, ...rest}:IElemBtn)=>{
  return (
    <button className={cl.tagBtn} onClick={clickTagHandler} {...rest}>
      <CrossElement rotateDegree={45}/>
    </button>
  )
};

export default inputWithList;