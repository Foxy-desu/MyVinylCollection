import AddAlbumBtn from "../../../shared/components/addAlbumBtn/addAlbumBtn";
import { IAddAlbumFormState } from "../model/addAlbumContainer";
import cl from './addAlbum.module.scss';


interface IAddAlbumProps {
  popupFields: IAddAlbumFormState
  popupHandlers: {[key: string]: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>}
  addAlbum: ()=>void;
  popupState: {
    popup: boolean;
    closePopup: ()=>void;
    openPopup: ()=>void;
  }
}
interface IPopupProps {
  popupFields: IAddAlbumProps['popupFields'];
  popupHandlers: IAddAlbumProps['popupHandlers'];
  addAlbum: IAddAlbumProps['addAlbum'];
  closePopup: IAddAlbumProps['popupState']['closePopup'];
}

const AddAlbum =({...props}:IAddAlbumProps)=> {
  return (
    <>
      {props.popupState.popup
        ? <Popup popupFields={props.popupFields} popupHandlers={props.popupHandlers} addAlbum={props.addAlbum} closePopup={props.popupState.closePopup} />
        : false
      }
      <div style={{width: '100%', height: '100%'}}>
        <AddAlbumBtn onClick={props.popupState.openPopup}/>
      </div>      
    </>
  )
};

const Popup =({popupFields, popupHandlers, addAlbum, closePopup}:IPopupProps)=> {
  const {album, artist, date, compositions}=popupFields;
  const {handleAlbumChange, handleArtistChange, handleDateChange, handleCompositionsChange} = popupHandlers;
  return (
    <div className={cl.popup}>
        <form className={cl.popupContent}>
          <div>
            <label className="visually-hidden" htmlFor="albumName">
              Album name
            </label>
            <input
              className="input"
              value={album}
              type="text"
              id="albumName"
              placeholder="Album name"
              onChange={handleAlbumChange}/>
          </div>
          <div>
            <label className="visually-hidden" htmlFor="artist">
              Artist
            </label>
            <input
              className="input"
              value={artist}
              type="text"
              id="artist"
              placeholder="Artist"
              onChange={handleArtistChange}/>
          </div>
          <div>
            <label className={cl.label} htmlFor="issueDate">
              Issue date
            </label>
            <input
              className="input"
              value={date}
              type="date"
              id="issueDate"
              placeholder="Issue date"
              onChange={handleDateChange}/>
          </div>
          <div>
            <label className={cl.label} htmlFor="compositions">
              Compositions
            </label>
            <textarea
              className="input textArea"
              value={compositions}
              id="compositions"
              placeholder="Compositions"
              onChange={handleCompositionsChange}
              />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <button type="button" onClick={()=> {
              addAlbum();
              closePopup();
            }}>
              Add Album to Collection
            </button>
            <button type="button" onClick={closePopup}>Close</button>
          </div>
        </form>
      </div>
  )
};

export default AddAlbum;