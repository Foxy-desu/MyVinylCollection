import cl from './inputButton.module.scss';

interface IInputButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  srText: string;
}
const InputButton =({srText, ...rest}:IInputButton)=> {
  return(
    <button className={cl.inputButton} {...rest}>
      <span className='visually-hidden'>{srText}</span>
      <CrossElement rotateDegree={0}/>
    </button>
  )
};

const CrossElement=({rotateDegree=0})=>{
  return (
    <div className={cl.crossElement}>
      <div className={cl.linesWrap} style={{transform:`rotate(${rotateDegree}deg)`}}>
        <span className={cl.crossElement_line}></span>
        <span className={cl.crossElement_line}></span>
      </div>
    </div>
  )
};

export default InputButton;