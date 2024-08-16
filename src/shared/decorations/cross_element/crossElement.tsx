import cl from './crossElement.module.scss';

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

export default CrossElement;