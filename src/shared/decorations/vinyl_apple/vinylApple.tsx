import cl from './vinylApple.module.scss';

const VinylApple =()=> {
  return (
    <div className={cl.vApple}>
      <div className={cl.vAppleBg}>
        <span className={cl.vAppleLine}/>
      </div>
    </div>
  )
};

export default VinylApple;