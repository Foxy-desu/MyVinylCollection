import { useState } from 'react';
import cl from './albumCreationForm.module.scss';
import FormInput from '../../../shared/components/form_input/formInput';

const AlbumCreationForm =()=> {
  const [album, setAlbum] = useState('');
  const [artists, setArtists] = useState([]);
  const [releaseDate, setReleaseDate] = useState(null);
  const [genres, setGenres] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [compositions, setCompositions] = useState([]);
  const [authors, setAuthors] = useState([]);
  //visual state
  const [submitDisabled, setSubmitDisabled] = useState(true);
  //functions
  function changeAlbumTitle(title:string) {
    setAlbum(title);
  }

  return (
    <form>
      <fieldset>
        <FormInput
          id='albumNameCreate'
          value={album}
          labelTitle='Album name'
          labelVisible={false}
          isRequired={true}
          changeValue={changeAlbumTitle}
          placeholder='Album name (required)'
          type='text'
        />
      </fieldset>
      <fieldset>
        <div className={cl.inputBlock}>
        <FormInput
          id='albumNameCreate'
          value={album}
          labelTitle='Album name'
          labelVisible={false}
          isRequired={true}
          changeValue={changeAlbumTitle}
          placeholder='Album name (required)'
        />
          <label htmlFor="artist">Artists<span className='required'>*</span></label>
          <input type="text" id="artist" name="artist" required/>
          <button className={`${cl.formBtn} ${cl.addBtn}`}>+</button>
        </div>
        <div className={cl.outputBlock}>
          {/* {artists tags} */}
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="releaseDate">Release date</label>
        <input type="number" min="1900" max={new Date(Date.now()).getFullYear()} step="1"/>
      </fieldset>
      <fieldset>
        <div className={cl.albumCoverPreview}>
          {/* both button and preview div */}
          <img className={cl.coverImage} src="" alt="" />
          <h3 className={cl.coverAlbumTitle}>{album}</h3>
          <p className={cl.coverArtists}>{artists.join(', ')}</p>
        </div>
      </fieldset>
      <fieldset>
        <div className={cl.inputBlock}>
          <label htmlFor="genres">Genres</label>
          <input type="text" id="genres" name="genres"/>
          <button className={`${cl.formBtn} ${cl.addBtn}`}>+</button>
        </div>
        <ul className={cl.outputBlock}>
          {/* {genres tags} */}
        </ul>
      </fieldset>
      <fieldset>
        <div className={cl.inputBlock}>
          <label htmlFor="authors">Authors</label>
          <input type="text" id="authors" name="authors"/>
          <button className={`${cl.formBtn} ${cl.addBtn}`}>+</button>
        </div>
        <ul className={cl.outputBlock}>
          {/* authors list */}
        </ul>
      </fieldset>
      <fieldset>
        <div className={cl.inputBlock}>
          <label htmlFor="compositions">Compositions</label>
          <input type="text" id="compositions" name="compositions"/>
          <button className={`${cl.formBtn} ${cl.addBtn}`}>+</button>
        </div>
        <ul className={cl.outputBlock}>
          {/* compositions list */}
        </ul>
      </fieldset>
      <div>
        {/* close button should reveal modal with warning */}
        <button className={cl.formBtn} type="button">Create album</button>
        <button className={cl.formBtn} type="button">Close</button>
      </div>

    </form>
  )
};

export default AlbumCreationForm;