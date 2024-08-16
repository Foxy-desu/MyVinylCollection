import { ReactNode } from 'react';
import cl from './inputButton.module.scss';

interface IInputButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  srText: string;
}
const InputButton =({children, srText, ...rest}:IInputButton)=> {
  return(
    <button className={cl.inputButton} {...rest}>
      <span className='visually-hidden'>{srText}</span>
      {children}
    </button>
  )
};

export default InputButton;