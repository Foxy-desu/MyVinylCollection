export type TInputWithListContainerListState = Array<{title:string, id:string}>|never[];
export interface IInputWithListContainerProps {
  inputId: string;
  inputTitle: string;
  inputPlaceholder: string;
  inputLabelVisible: boolean;
  inputBtnSrText: string;
  inputIsRequired: boolean;
  listContentType: 'tags'|'listElements';
  inputPrompt?: string;
  passListElements: ([]:TInputWithListContainerListState) => void;
}
export interface IInputWithListProps {
  listContentType: 'tags'|'listElements';
  inputId: string;
  inputValue: string;
  inputTitle: string;
  inputLabelVisible: boolean;
  inputIsRequired: boolean;
  changeInput: (value: string) => void;
  inputPlaceholder: string;
  inputBtnSrText: string;
  inputBtnClick: ()=> void;
  enterBtnCallback: ()=>void;
  listItems: Array<{title:string, id:string}>;
  title?: string | undefined;
  tagBtnClick: (id:string)=> void
}
export interface IListBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clickTagHandler: (e: React.MouseEvent<HTMLButtonElement>)=>void;
}
export interface ITagListProps {
  tags: IInputWithListProps['listItems'];
  clickTag: IInputWithListProps['tagBtnClick'];
}
export interface ITagProps {
  tag: {
    title: string;
    id: string;
  };
  clickTag: (tagId: string) => void;
}
export interface IPlainListProps {
  elements: IInputWithListProps['listItems'];
  clickElementBtn: IInputWithListProps['tagBtnClick'];
}
export interface IListElementProps {
  listElement: {title:string, id:string};
  clickElementBtn: (id:string)=>void;
  orderIndex: number
}
