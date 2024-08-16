import cl from './formInput.module.scss';

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  labelTitle: string;
  isRequired: boolean;
  labelVisible: boolean;
  changeValue: (value: string) => void;
  enterCallback: () => void;
}
const FormInput =({id,value,labelTitle,isRequired,labelVisible,changeValue,enterCallback, ...rest}:IFormInput)=> {
  const LabelClass = labelVisible ? cl.inputLable:'visually-hidden';
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    changeValue(e.target.value);
  };

  function handleInputOnEnter(e: React.KeyboardEvent){
    if (e.key === 'Enter' || e.keyCode === 13) {
      enterCallback()
      e.preventDefault();
      return false;
    }
  }

  return (
    <div>
      <label
        className={LabelClass}
        htmlFor={id}
      >
        {labelTitle}{isRequired? <Required/>:''}
      </label>
      <input className={cl.input} id={id} value={value} onChange={handleInputChange} onKeyDown={handleInputOnEnter} {...rest} required/>
    </div>
  )
};

const Required =()=>{
  return <span className={cl.required} aria-label='required field'>*</span>
}

export default FormInput;