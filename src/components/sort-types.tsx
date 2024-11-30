type SortTypesProps = {
  sortType: string;
};

function SortTypes({sortType}: SortTypesProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>
      {sortType}
    </li>
  );
}

export default SortTypes;
