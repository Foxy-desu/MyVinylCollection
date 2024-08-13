import VinylApple from "../../decorations/vinyl_apple/vinylApple";
import cl from './addAlbumBtn.module.scss';

const AddAlbumBtn =({...rest})=> {
  return (
    <>
      <button className={cl.addAlbum} type="button" {...rest}>
        <div className={cl.shimer}></div>
        <span className="visually-hidden">Create a new album</span>
        <VinylApple/>
      </button>
    </>
  )
};

export default AddAlbumBtn;