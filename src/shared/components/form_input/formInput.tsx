import cl from './formInput.module.scss';
import { IFormInput } from '../../utils/types';

const FormInput =({labelTitle,isRequired,labelVisible,changeValue,enterCallback,validationErrorObject,validationLock,...rest}:IFormInput)=> {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    changeValue((e.target.value));
  };
  function handleInputOnEnter(e: React.KeyboardEvent){
    if (e.key === 'Enter' || e.keyCode === 13) {
      !validationLock && enterCallback();
      e.preventDefault();
      return false;
    }
  };
  function extendRequiredPlaceholder(isRequired: boolean, placeholder: string | undefined){
    if(placeholder) {
      return isRequired ? `${placeholder} *` : placeholder;
    } 
    return '';
  };

  return (
    <div>
      <label
        className={cl.inputLabel}
        htmlFor={rest.id}
      >
      </label>
      <span className={cl.errOutput}>
        {`${validationErrorObject?.emptyErr}${validationErrorObject?.symbolErr} `}
        &nbsp;
      </span>
      <input
        {...rest}
        className={cl.input}
        onChange={handleInputChange}
        onKeyDown={handleInputOnEnter}
        placeholder={extendRequiredPlaceholder(isRequired, rest.placeholder)}
        title={rest.title}
        />
    </div>
  )
};

export default FormInput;