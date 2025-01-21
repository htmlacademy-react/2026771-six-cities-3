import { SORT_TYPES } from '../const';

type SortTypesProps = {
  sortType: string;
  onSortChange: (newSortType: string) => void;
};

function SortTypes({ sortType, onSortChange }: SortTypesProps): JSX.Element {
  return (
    <ul className="places__options">
      {SORT_TYPES.map((type) => (
        <li
          key={type}
          className={`places__option ${type === sortType ? 'places__option--active' : ''}`}
          onClick={() => onSortChange(type)}
          tabIndex={0}
        >
          {type}
        </li>
      ))}
    </ul>
  );
}

export default SortTypes;
