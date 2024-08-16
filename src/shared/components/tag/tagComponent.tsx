import CrossElement from '../../decorations/cross_element/crossElement';
import cl from './tagComponent.module.scss';

interface ITag {
  tag: {
    title: string;
    id: string;
  };
  clickTag: (tagId: string) => void;
}
interface ITagBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clickTagHandler: (e: React.MouseEvent<HTMLButtonElement>)=>void;
}
const Tag =({tag, clickTag}:ITag)=> {
  function handleTagRemoval(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    clickTag(tag.id)
  }
  return (
    <li className={cl.tagComponent}>
      <span className={cl.tagTitle}>{tag.title}</span>
      <TagBtn clickTagHandler={handleTagRemoval}/>
    </li>
  )
};

const TagBtn = ({clickTagHandler, ...rest}:ITagBtn)=>{
  return (
    <button className={cl.tagBtn} onClick={clickTagHandler} {...rest}>
      <CrossElement rotateDegree={45}/>
    </button>
  )
};

export default Tag;