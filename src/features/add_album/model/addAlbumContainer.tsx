import { useEffect, useState } from "react";
import AddAlbum from "../ui/addAlbum"
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { addAlbum } from "../../../app/store/albumsSlice";


  //types
 export type TAddAlbumHandlerParams = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
 export interface IAddAlbumFormState {
  album: string;
  artist: string;
  date: string;
  compositions: string;
}
export interface IAlbum {
  id: number,
  album: string,
  artist: string,
  date: string,
  compositions: string,
};


//TODO: refactor code
const AddAlbumContainer =()=> {
  
  //state
  const albumsCount = useAppSelector((state)=> state.albums.albumsCollection.length);
  const [prevCount, setPrevCount] = useState(albumsCount);
  const dispatch = useAppDispatch();
  const [addAlbumForm, setAddAlbumForm] = useState({
    'album': '',
    'artist': '',
    'date': '',
    'compositions': '',
  });
  const [popup, setPopup]=useState(false);
  const [message, setMessage] = useState("");
  
  //functions
  function handleAlbumChange(e:TAddAlbumHandlerParams){
    setAddAlbumForm((prev)=> {
      return {
        ...prev,
        album: e.target.value,
      }
    });
  }
  function handleArtistChange(e:TAddAlbumHandlerParams){
    setAddAlbumForm((prev)=> {
      return {
        ...prev,
        artist: e.target.value,
      }
    });
  }
  function handleDateChange(e:TAddAlbumHandlerParams){
    setAddAlbumForm((prev)=>{
      return {
       ...prev,
        date: e.target.value,
      }
    })
  }
  function handleCompositionsChange(e:TAddAlbumHandlerParams){
    setAddAlbumForm((prev)=> {
      return {
       ...prev,
        compositions: e.target.value,
      }
    })
  }
  function resetAddAlbumForm(state: IAddAlbumFormState){
    const copyState: typeof state = JSON.parse(JSON.stringify(state));
    for(let key in copyState){
      copyState[key as keyof IAddAlbumFormState] = '';
    }
    setAddAlbumForm(copyState);
  }
  function addAlbumToStore(){
    const newAlbum = {
      id: albumsCount + 1,
      album: addAlbumForm.album,
      artist: addAlbumForm.artist,
      date: addAlbumForm.date,
      compositions: addAlbumForm.compositions,
    };
    dispatch(addAlbum(newAlbum));
    resetAddAlbumForm(addAlbumForm)
  };
  function handleMessageOnAddAlbum(){
    setPrevCount(albumsCount);
    addAlbumToStore();
    if(prevCount < albumsCount) {
      setMessage(`Album added successfully!`);
      setTimeout(()=> {
        setMessage("");
      }, 3000);
    } else {
      setMessage("Failed to add album.");
      setTimeout(()=> {
        setMessage("");
      }, 3000);
    }
  }
  function openPopup(){
    setPopup(true);
  }
  function closePopup(){
    setPopup(false);
  } 

  return (
    <>
      <AddAlbum popupFields={addAlbumForm} popupHandlers={{handleAlbumChange, handleArtistChange, handleDateChange, handleCompositionsChange}} addAlbum={handleMessageOnAddAlbum} popupState={{popup, closePopup, openPopup}}/>
      {message && <div style={{position: 'fixed', bottom: 12, right: 12, top: 'auto', left: 'auto', background: 'black'}}>{message}</div>}
    </>
  )
};

export default AddAlbumContainer;


