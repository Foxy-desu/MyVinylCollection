import cl from './sortBar.module.scss';

interface ISortOption {
  [index: string]: string
}
interface ISortBarProps {
  options: ISortOption[];
  optionsTitle?: string;
  selectedValue: string;
  selectOption: (value: string) => void;
  label?: string;
  selectId?: string;
}

const SortBar =({options, selectOption, optionsTitle='sort method', selectedValue, label='sort by:',selectId='sortSelect'}:ISortBarProps)=> {
  
  function renderOptions(options: ISortOption[]){
    return options.map((option) => (
      <option
        className={cl.sortOption}
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
    ))
  };
  function handleOptionSelection(e: React.ChangeEvent<HTMLSelectElement>) {
    selectOption(e.target.value);
  };

  return (
    <div className={cl.sortBar}>
        <label
          className={cl.sortLabel}
          htmlFor={selectId}
        >
          {label}
        </label>
        <select
          className={cl.sortSelect}
          id={selectId}
          value={selectedValue}
          onChange={handleOptionSelection}
        >
          <option
            className={cl.sortOption}
            value=''
            disabled
          >
            {optionsTitle}
          </option>
          {renderOptions(options)}
        </select>
    </div>
  )
};

export default SortBar;