type CityNameProps = {
  cityName: string;
  onClickCity: () => void;
};

function CityName({ cityName, onClickCity }: CityNameProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className="locations__item-link tabs__item"
        onClick={onClickCity}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}
export default CityName;
