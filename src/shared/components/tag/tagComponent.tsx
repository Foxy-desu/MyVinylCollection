import { elipseString } from '../../utils/helpers/formatting';
import { ITagProps } from '../../utils/types';
import cl from './tagComponent.module.scss';

const Tag =({tag, clickTag}:ITagProps)=> {
  function handleTagRemoval(e: React.MouseEvent<HTMLElement>){
    e.preventDefault();
    clickTag(tag.id)
  };
  const elipsedString = elipseString(tag.title, 20);

  return (
    <li className={cl.tagComponent} onClick={handleTagRemoval}>
      <span className={cl.tagTitle}>{elipsedString}</span>
    </li>
  )
};

export default Tag;